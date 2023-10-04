import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Sign.css';

const SignUp = () => {
    const[error, setError] = useState(null);

    const {createUser} = useContext(AuthContext);

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        // reset error
        setError('');

        if(password.length < 6){
            setError('Password must be 6 character');
            return;
        }

        if(password !== confirm){
            setError('Your password Did not match');
            return;
        }

        // create user
        createUser(email, password)
        .then(res =>{
            const user =res.user;
            console.log('created user', user);
            form.reset();
        })
        .catch(error =>{
            console.log(error.message)
        })

    }

    return (
        <section className="form-container">
        <h4 className="form-title">Sign Up</h4>
        <div>
          <form onSubmit={handleSubmit}>
          <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" id="email" required />
          </div>
          <div className="form-control">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" id="password" required />
          </div>
          <div className="form-control">
              <label htmlFor="password">Confirm PassWord</label>
              <input type="password" name="confirm" placeholder="confirm" id="confirm" />
          </div>
           <div>
              <input className="btn-submit" type="submit" value="Sign Up" />
           </div>
           <p style={{textAlign: 'center'}}>Already have account? <Link to='/login'>Login</Link></p>

           <p className='text-error'>{error}</p>
          </form>
        </div>
      </section>
    );
};

export default SignUp;