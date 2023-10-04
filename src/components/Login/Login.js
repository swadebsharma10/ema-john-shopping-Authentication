import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <section className="form-container">
      <h4 className="form-title">Login</h4>
      <div>
        <form>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" id="" required />
        </div>
        <div className="form-control">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" id="" required />
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
