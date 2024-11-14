import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [redirectMessage, setRedirectMessage] = useState("");

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    // Email validation function
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Validate email format
        if (!isValidEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === formData.email);
        if (existingUser) {
            alert('User already exists!');
            return;
        }

        const newUser = { name: formData.name, email: formData.email, password: formData.password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setIsSubmitted(true);
        setRedirectMessage("Successfully registered. Redirecting to login...");

        setTimeout(() => {
            window.location.href = "/login";
        }, 1000);
    };

    return (
        <div className="signin-container">
            <div className="signin-box">
                {isSubmitted ? (
                    <h2>{redirectMessage}</h2>
                ) : (
                    <>
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            {["name", "email", "password", "confirmPassword"].map((field) => (
                                <div key={field}>
                                    <label>
                                        {field === "confirmPassword"
                                            ? "Confirm Password"
                                            : field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type={field.includes("password") ? "password" : "text"}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            ))}
                            <button className="signin-btn" type="submit">
                                Sign Up
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignUp;
