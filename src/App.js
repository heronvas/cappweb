import './App.css';
import Home from './pages/Home';
import {  Route, Routes } from 'react-router-dom';
import Car1 from './components/Baleno';
import Car2 from './components/Baleno2';
import Car3 from './components/Ertiga';
import React, { useState, useEffect } from 'react';
function App() {
  const [show, setShow] = useState(false);
    useEffect(() => {
        // Scroll to the top when the App component mounts
        window.scrollTo(0, 0);
    
        // Set show state to true after 5 seconds
        const timeoutId = setTimeout(() => {
          setShow(true);
        }, 3000);
    
        // Clear the timeout when the component unmounts to avoid memory leaks
        return () => clearTimeout(timeoutId);
      }, []);
    
      const toggleShow = () => {
        setShow(!show);
      };
  
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home visible={show} close={toggleShow}/>}/>
      <Route path='/baleno' element={<Car1/>}/>
      <Route path='/baleno2' element={<Car2 visible={show} close={toggleShow}/>}/>
      <Route path='/ertiga' element={<Car3/>}/>
    </Routes>
    
    </>
  );
}

export default App;
