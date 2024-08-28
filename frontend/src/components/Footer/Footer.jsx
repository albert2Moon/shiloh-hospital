/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="ftr-divider"></div>
      <div className="ftr2">
        <div className="fcard">

          <h2> Our Newsletter</h2>

          <p>Subscribe and stay informed with the latest health tips, hospital news, and wellness programs from Shiloh Hospital or Follow us on social media and be a part of our health-conscious community!</p>

          <div className="fcard-input">
            <input type="email" name="newletter" id="newsletter" placeholder='Email' />
            <button>Subscribe</button>
          </div>

        </div>

        <div className="fcard">
          <h2>Quick Links</h2>
          <ul className="ftr-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about-us'> About Us</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/fundraising'>Fundraising</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
          </ul>
        </div>

        <div className="fcard">
          <h2>Our Commitment</h2>
          <p>At Shiloh Hospital, we are committed to providing exceptional healthcare with compassion and care. Our dedication to patient well-being is at the heart of everything we do.</p>

          <h2>Visiting Hours</h2>
          <ul>
            <li>Mon to Sun: Open - 24hrs</li>
          </ul>

        </div>

        <div className="fcard">
          <h2>Get in Touch</h2>
          <div className="ftr-cont">
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <p>First Floor PJK House,
                Bulabira Road,
                Najjera A
              </p>
            </div>
          </div>
          <div className="ftr-cont">
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div><a href="tel:+256776711407">+256 776 711407</a></div>
          </div>
          <div className="ftr-cont">
            <div>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div><a href="mailto:info@shilohhospital.com">info@shilohhospital.com</a></div>
          </div>

          <hr />

          <div className="ftr-cont">
          <span>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </span>
            <span>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="ftr-divider"></div>

      <div className="ftr3">
        <p>Copyright &copy;2024 Shiloh Hospital. All Rights Reserved</p>
        <p><Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link></p>
      </div>
    </footer>
  )
}

export default Footer
