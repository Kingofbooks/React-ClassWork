import React from 'react';
import './Header.css';

function Header({ onSignInClick, onLoginClick }) { 
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">A_S Inventory</h1>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact us</a></li>
                    </ul>
                    <div className="auth-buttons">
                        <button className="btn sign-in" onClick={onSignInClick}>Sign In</button>
                        <button className="btn sign-up" onClick={onLoginClick}>Log In</button> 
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
