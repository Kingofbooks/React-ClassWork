import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <hr className="footer-divider" />
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Aryan Inventory Management</p>
            </div>
        </footer>
    );
}

export default Footer;



//NOTE:
// new Date().getFullYear()-> Give us the current year(A js component).