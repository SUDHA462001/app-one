import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Bgimage from './components/demo/bgimage';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Footer1 from './components/Footer';
// import { IconName } from "react-icons/";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection/>
        <Bgimage/>
        <Cards/>
        
        
        <Footer1 />
        {/* <Routes>
          < Route path='/' exact element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          
        </Routes> */}
      </Router>
      

      
      
    </>
  );
}

export default App;
