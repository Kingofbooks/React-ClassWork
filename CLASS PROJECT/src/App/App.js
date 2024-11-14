import React, { useState } from 'react';
import Footer from '../Footer/footer';
import Login from '../Login/Login';
import Main from '../Main Page/main';
import SignIn from '../Signup/Signup';
import Header from '../Header/header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [orders, setOrders] = useState([]);  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCompleteOrder = (order) => {
    console.log("Completing order:", order); 
    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders, order];
      console.log("Updated orders:", updatedOrders); 
      return updatedOrders;
    });
  };

  return (
    <div className="App">
      <Header 
        onSignInClick={() => handlePageChange('signin')} 
        onLoginClick={() => handlePageChange('login')}  
      /> 
      {currentPage === 'signin' && <SignIn onSignIn={() => handlePageChange('main')} />}
      {currentPage === 'login' && <Login onLogin={() => handlePageChange('main')} />}    
      {currentPage === 'main' && (
        <Main orders={orders} onCompleteOrder={handleCompleteOrder} />
      )}

      <Footer /> 
    </div>
  );
};

export default App;
