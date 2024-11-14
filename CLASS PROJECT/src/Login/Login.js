import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectMessage, setRedirectMessage] = useState("");
    const [invalidAttempts, setInvalidAttempts] = useState(0);
    const [showPopup, setShowPopup] = useState(false); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            user => user.email === formData.email && user.password === formData.password
        );

        if (user) {
            setIsLoggedIn(true);
            setRedirectMessage("Successfully logged in. Redirecting...");
            setInvalidAttempts(0); // Reset 0 input after successful login

            setTimeout(() => {
                window.location.href = "/Main.js"; 
            }, 1000);
        } else {
            setInvalidAttempts(prev => prev + 1); // Increment 0 attempts
            if (invalidAttempts + 1 >= 3) {
                setShowPopup(true);
            }
            alert("Invalid email or password!");
        }
    };

    const closePopup = () => {
        setShowPopup(false);
        setInvalidAttempts(0);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                {isLoggedIn ? (
                    <h2>{redirectMessage}</h2>
                ) : (
                    <>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                required
                            />

                            <label>Password</label>
                            <div className="password-field">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    className="show-password-btn"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>

                            <button type="submit" className="login-btn">
                                Login
                            </button>
                        </form>
                    </>
                )}
            </div>

            {/* Popup for invalid attempts */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>You've entered invalid credentials 3 times. Please try signing up.</p>
                        <button onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
