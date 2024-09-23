import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          
          {/* Services Route */}
          <Route 
            path='/services' 
            element={
              <div 
                className="services" 
                style={{ 
                  backgroundImage: `url(/images/img-9.jpg)`, 
                  minHeight: '100vh', // Ensures the div is visible
                  backgroundSize: 'cover', // Makes background cover full area
                  backgroundPosition: 'center' // Centers the background
                }}
              >
                {/* Fallback img tag in case background fails */}
                <img src="/images/img-9.jpg" alt="Services" style={{ display: 'none' }} />
                <Services />
              </div>
            } 
          />
          
          {/* Products Route */}
          <Route 
            path='/products' 
            element={
              <div 
                className="products" 
                style={{ 
                  backgroundImage: `url(/images/img-1.jpg)`, 
                  minHeight: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <img src="/images/img-1.jpg" alt="Products" style={{ display: 'none' }} />
                <Products />
              </div>
            } 
          />
          
          {/* Sign Up Route */}
          <Route 
            path='/sign-up' 
            element={
              <div 
                className="sign-up" 
                style={{ 
                  backgroundImage: `url(/images/img-8.jpg)`, 
                  minHeight: '100vh',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <img src="/images/img-8.jpg" alt="Sign Up" style={{ display: 'none' }} />
                <SignUp />
              </div>
            } 
          />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
