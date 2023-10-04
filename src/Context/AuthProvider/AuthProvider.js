import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../Firebase/Firebase.congig';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = ()=>{
      return signOut(auth);
    }
   
    // Observer
    useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('observer', currentUser)
        });

        return ()=>{
            unSubscribe();
        }

    }, [])



    const authInfo ={
        user,
        createUser,
        signInUser,
        logOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;