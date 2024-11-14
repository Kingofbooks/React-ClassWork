import React from 'react';

const Orders = ({ orders }) => {
    return (
        <div className="orders">
            <h2>Completed Orders</h2>
            {orders.length === 0 ? (
                <p>No completed orders.</p>
            ) : (
                orders.map((order, index) => (
                    <div key={index}>
                        <h3>Order {index + 1}</h3>
                        <ul>
                            {Array.isArray(order.items) && order.items.length > 0 ? (
                                order.items.map((item, idx) => (
                                    <li key={idx}>
                                        {item.name} - ${item.price} x {item.qty} = ${item.sum}
                                    </li>
                                ))
                            ) : (
                                <li>No items in this order.</li>
                            )}
                        </ul>
                        <strong>Total: ${order.total}</strong>
                    </div>
                ))
            )}
        </div>
    );
};

export default Orders;
