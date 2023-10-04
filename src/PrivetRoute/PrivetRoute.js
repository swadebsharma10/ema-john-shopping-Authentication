import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <div style={{textAlign:'center'}}>Loading...............</div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivetRoute;