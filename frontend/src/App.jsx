/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/OurServices/Services';
import Blog from './Pages/Blog/Blog';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import General from './components/OurServices/DetailedServices/General';
import Fertility from './components/OurServices/DetailedServices/Fertility';
import Men from './components/OurServices/DetailedServices/Men';
import Womens from './components/OurServices/DetailedServices/Womens';
import Child from './components/OurServices/DetailedServices/Child';
import Surgical from './components/OurServices/DetailedServices/Surgical';
import Obstetrics from './components/OurServices/DetailedServices/Obstetrics';
import Screening from './components/OurServices/DetailedServices/Screening';
import Pcos from './components/OurServices/DetailedServices/Pcos';
import Diagnosis from './components/OurServices/DetailedServices/Diagnosis';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { HashLink } from 'react-router-hash-link'; 

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general-services" element={<General />} />
          <Route path="/services/fertility-services" element={<Fertility />} />
          <Route path="/services/mens-health-services" element={<Men />} />
          <Route path="/services/women-health-services" element={<Womens />} />
          <Route path="/services/pediatric-services" element={<Child />} />
          <Route path="/services/surgical-services" element={<Surgical />} />
          <Route path="/services/Obstetrics-services" element={<Obstetrics />} />
          <Route path="/services/screening-services" element={<Screening />} />
          <Route path="/services/pcos-clinical-services" element={<Pcos />} />
          <Route path="/services/diagnostic-services" element={<Diagnosis />} />
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
