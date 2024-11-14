import React, { useState } from 'react';
import './TMain.css';
// import InventoryItem from '../Inventory/inventory'; 

function TMain() {
    const [view, setView] = useState('dashboard');

    const showInventory = () => {
        setView('inventory');
    };

    const showDashboard = () => {
        setView('dashboard');
    };

    return (
        <div className="main-container">
            {/* Sidebar */}
            <aside className="sidebar">
                <h2>POS SYSTEM</h2>
                <ul>
                    <li><a href="#" onClick={showDashboard}>Dashboard</a></li>
                    <li><a href="#" onClick={showInventory}>Stores</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">Suppliers</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </aside>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                {/* Header */}
                <header className="header">
                    <div className="header-title">
                        <h1>POS (Point Of Sales) v3.0</h1>
                    </div>
                    <div className="user-info">
                        <span>11:07:27 AM</span>
                        <span>Administrator</span>
                    </div>
                </header>

                {/* Main Content */}
                <main className="main-content">
                    {view === 'dashboard' ? (
                        <>
                            {/* Dashboard Cards */}
                            <div className="dashboard-cards">
                                <div className="card green">Today Sales <span>₦0.00</span></div>
                                <div className="card red">Expired <span>0</span></div>
                                <div className="card yellow">Today Invoice <span>0</span></div>
                                <div className="card blue">New Products <span>4</span></div>
                            </div>

                            {/* Today's Transactions */}
                            <div className="transactions-section">
                                <h2>Today's Transactions</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Order ID</th>
                                            <th>Customer</th>
                                            <th>Payment</th>
                                            <th>Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4">No data available in table</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        // Render InventoryItem component when 'view' is 'inventory'
                        {/* <InventoryItem /> */}
                    )}
                </main>
            </div>
        </div>
    );
}

export default TMain;
