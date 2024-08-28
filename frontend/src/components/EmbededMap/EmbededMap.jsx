/* eslint-disable no-unused-vars */
import React from 'react';
import './EmbededMap.css';

const EmbededMap = () => {
    return (
        <>

            <div className="container-title">
                <div className="title-dot"></div>
                <h2>Our Location</h2>
            </div>

            <div className='map-container'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.462969950383!2d32.624273!3d0.378016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb5785cf2043%3A0x8a0ac4951e99a5df!2sShiloh%20Hospital!5e0!3m2!1sen!2sug!4v1723848518271!5m2!1sen!2sug"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Google Map'
                ></iframe>
            </div>
        </>
    );
}

export default EmbededMap;
