import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./Login.css";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.form?.pathname || '/';

    const handleSubmit =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)
        // sign in user
        signInUser(email, password)
        .then(res =>{
            const user =res.user;
            console.log('logged user', user);
            form.reset();
            navigate(form, {replace: true});
        })
        .catch(error =>{
            console.log(error.message)
        })
    }


  return (
    <section className="form-container">
      <h4 className="form-title">Login</h4>
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
         <div>
            <input className="btn-submit" type="submit" value="Login" />
         </div>
         <p style={{textAlign: 'center'}}>New to this site? <Link to='/signup'>Create Account</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Login;
