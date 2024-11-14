import React, { useState } from 'react';
import './user.css';

function AddUser() {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        role: 'Cashier',
        warehouse: 'Store One',
    });
    const [users, setUsers] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false); 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const generateSecurePassword = () => {
        const newPassword = Math.random().toString(36).slice(-8); 
        setFormData({ ...formData, password: newPassword });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData]); 
        setShowModal(false); 
        setFormData({
            fullname: '',
            username: '',
            email: '',
            password: '',
            role: 'Cashier',
            warehouse: 'Store One',
        });
    };

    return (
        <div>
            <button className="open-modal-btn" onClick={() => setShowModal(true)}>
                Create User Account
            </button>

            {showModal && (
                <div className="add-user-modal">
                    <h2>Create User Account</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Password</label>
                        <div className="password-field">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <button type="button" onClick={generateSecurePassword}>
                                Generate Secure Password
                            </button>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                checked={showPassword}
                                onChange={toggleShowPassword}
                            />
                            Show password
                        </label>

                        <label>Role</label>
                        <select name="role" value={formData.role} onChange={handleInputChange}>
                            <option value="Cashier">Cashier</option>
                            <option value="Manager">Manager</option>
                            <option value="Admin">Administrator</option>
                        </select>

                        <label>Warehouse</label>
                        <select
                            name="warehouse"
                            value={formData.warehouse}
                            onChange={handleInputChange}
                        >
                            <option value="Store One">Store One</option>
                            <option value="Store Two">Store Two</option>
                        </select>

                        <div className="button-group">
                            <button
                                type="button"
                                className="dismiss-btn"
                                onClick={() => setShowModal(false)}
                            >
                                Dismiss
                            </button>
                            <button type="submit" className="create-btn">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Table to display created users */}
            {users.length > 0 && (
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Warehouse</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.fullname}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.warehouse}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default AddUser;
