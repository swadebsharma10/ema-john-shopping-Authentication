import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

const SignUp = () => {
    return (
        <section className="form-container">
        <h4 className="form-title">Sign Up</h4>
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
          <div className="form-control">
              <label htmlFor="password">Confirm PassWord</label>
              <input type="confirm" name="confirm" placeholder="confirm" id="" />
          </div>
           <div>
              <input className="btn-submit" type="submit" value="Sign Up" />
           </div>
           <p style={{textAlign: 'center'}}>Already have account? <Link to='/login'>Login</Link></p>
          </form>
        </div>
      </section>
    );
};

export default SignUp;