/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/OurServices/Services';
import Fundraiser from './Pages/Fundraiser/Fundraiser';
import Blog from './Pages/Blog/Blog';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import General from './components/OurServices/DetailedServices/General';
import Fertility from './components/OurServices/DetailedServices/Fertility';
import Mens from './components/OurServices/DetailedServices/Mens';
import Womens from './components/OurServices/DetailedServices/Womens';
import Child from './components/OurServices/DetailedServices/Child';
import Hope from './components/OurServices/DetailedServices/Hope';
import Maternal from './components/OurServices/DetailedServices/Maternal';
import Products from './components/OurServices/DetailedServices/Products';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-services" element={<General />} />
          <Route path="/services/fertility-services" element={<Fertility />} />
          <Route path="/services/mens-health-services" element={<Mens />} />
          <Route path="/services/women-health-services" element={<Womens />} />
          <Route path="/services/child-health-services" element={<Child />} />
          <Route path="/services/hope-fund-services" element={<Hope />} />
          <Route path="/services/maternal-health-services" element={<Maternal />} />
          <Route path="/services/products" element={<Products />} />
          <Route path="/fundraising" element={<Fundraiser />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    
      </div>
      <BackToTop />
      <Footer />
      </>
  );
}

export default App;
