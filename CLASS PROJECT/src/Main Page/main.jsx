import React, { useState } from 'react';
import './Main.css';
import InventoryItem from '../Inventory/inventory';
import AddUser from '../AddUser/user';
import Orders from '../Order/Orders';
function Main({ orders, onCompleteOrder }) {
    const [view, setView] = useState('dashboard');
    const [users, setUsers] = useState([]);

    const showInventory = () => setView('inventory');
    const showDashboard = () => setView('dashboard');
    const showProducts = () => setView('products');
    const showUsers = () => setView('users');
    const showOrders = () => setView('orders');

    // const handleCompleteOrder = (orderItems) => {
    //     const newOrder = { items: orderItems, date: new Date() };
    //     onCompleteOrder(newOrder);
    //     setUsers([]);
    // };
    const handleCompleteOrder = () => {
        const newOrder = {
            items: [
                { name: 'Item 1', price: 10, qty: 2, sum: 20 }, 
                { name: 'Item 2', price: 15, qty: 1, sum: 15 },
            ],
            total: 35, 
        };
        onCompleteOrder(newOrder);
    };
    return (
        <div className="content-container">
            <aside className="sidebar">
                <ul>
                    <li><a href="#" onClick={showDashboard}>Dashboard</a></li>
                    <li><a href="#" onClick={showInventory}>Stores</a></li>
                    <li><a href="#" onClick={showUsers}>Users</a></li> 
                    <li><a href="#" onClick={showProducts}>Products</a></li>
                    <li><a href="#">Suppliers</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#" onClick={showOrders}>Orders</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </aside>
            <main className="main-content">
                {view === 'dashboard' ? (
                    <>
                        <h2>Dashboard</h2>
                        <div className="stats-container">
                            <div className="stat-box">
                                <h3>Total Products</h3>
                                <p>{users.length}</p>
                            </div>
                            <div className="stat-box">
                                <h3>Orders Today</h3>
                                <p>{orders.length}</p>
                            </div>
                            <div className="stat-box">
                                <h3>Low Stock Items</h3>
                                <p>12</p>
                            </div>
                            <div className="stat-box">
                                <h3>Total Suppliers</h3>
                                <p>15</p>
                            </div>
                        </div>
                        <div className="actions-container">
                            <button className="action-btn" onClick={showInventory}>Add New Product</button>
                            <button className="action-btn">View Reports</button>
                            <button className="action-btn">Manage Orders</button>
                        </div>
                        <div className="transactions-section">
                            <h2>Today's Transactions</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Order Date</th>
                                        <th>Items</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length === 0 ? (
                                        <tr>
                                            <td colSpan="3">No orders available</td>
                                        </tr>
                                    ) : (
                                        orders.map((order, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{order.date.toLocaleString()}</td>
                                                <td>{order.items.length} items</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : view === 'inventory' || view === 'products' ? (
                    <InventoryItem users={users} setUsers={setUsers} onCompleteOrder={handleCompleteOrder} />
                ) : view === 'users' ? (
                    <AddUser />
                ) : view === 'orders' ? (
                    <Orders orders={orders} />
                ) : null}
            </main>
        </div>
    );
}

export default Main;
