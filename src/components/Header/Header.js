import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const {user, logOutUser} = useContext(AuthContext);

   

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? 
                   <Link><button onClick={logOutUser} >Sign Out</button></Link>
                    :
                    <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                    </>
                   }

            </div>
        </nav>
    );
};

export default Header;