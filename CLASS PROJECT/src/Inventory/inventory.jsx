import React, { useState } from "react";
import "./Inventory.css";

const InventoryItem = ({ onCompleteOrder }) => {
    const [price, setPrice] = useState(0);
    const [qty, setQty] = useState(0);
    const [sum, setSum] = useState(0);
    const [total, setTotal] = useState(0);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");

    const addItem = () => {
        const newUser = { name, qty, price, sum: price * qty };
        const newUsers = [...users, newUser];
        setUsers(newUsers);

        const newTotal = newUsers.reduce((t, user) => t + user.sum, 0);
        setTotal(newTotal);

        setName('');
        setPrice(0);
        setQty(0);
        setSum(0);
    };

    const handlePriceChanges = (e) => {
        const newPrice = parseFloat(e.target.value);
        if (!isNaN(newPrice)) {
            setPrice(newPrice);
            setSum(newPrice * qty);
        }
    };

    const handleQuantityChanges = (e) => {
        const newQty = parseFloat(e.target.value);
        if (!isNaN(newQty)) {
            setQty(newQty);
            setSum(price * newQty);
        }
    };

    const removeItem = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);

        const newTotal = updatedUsers.reduce((t, user) => t + user.sum, 0);
        setTotal(newTotal);
    };

    const completeOrder = () => {
        if (users.length > 0) {
            const order = { items: users, total };
            console.log(order); 
            onCompleteOrder(order);
            setUsers([]);
            setTotal(0);
        }
    };    

    return (
        <div className="HeadingInv">
            <h1>Inventory Management System</h1>
            <div className="row">
                <div className="col">
                    <h2>Add Products</h2>
                    <table className="Tables">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Amount</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Item Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Price"
                                        value={price}
                                        onChange={handlePriceChanges}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Qty"
                                        value={qty}
                                        onChange={handleQuantityChanges}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Amount"
                                        value={sum}
                                        disabled
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-success" type="button" onClick={addItem}>
                                        Add
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 align="left">Products</h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                    <td>{row.qty}</td>
                                    <td>{row.sum}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeItem(index)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="form-group" align="left">
                        <h3>Total</h3>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Total"
                            value={total}
                            disabled
                        />
                    </div>

                    <button className="btn btn-primary" onClick={completeOrder}>
                        Complete Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;
