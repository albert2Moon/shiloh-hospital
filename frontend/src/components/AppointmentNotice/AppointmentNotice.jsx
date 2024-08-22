/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './AppointmentNotice.css';

const AppointmentNotice = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    };

    return (
        <div className="notice-container">
            <div className="container-title">
                <div className="title-dot"></div>
                <h3>Appointment Notice</h3>
            </div>

            <div className='notice-contents'>
                <div className="notice-card">
                    <div className="notice-header">
                        <div className="dot"></div>
                        <h3>Appointment Preparation</h3>
                    </div>
                    <ul className='notice-list'>
                        <li><strong>Personal Information:</strong> Ensure you have your full name, contact details, and insurance information (if applicable) ready when booking your appointment.</li>
                        <li><strong>Reason for Visit:</strong> Be prepared to provide details about the reason for your visit. This helps us schedule the appropriate amount of time and ensure you see the right specialist.</li>
                        <li><strong>Medical History:</strong> If this is your first visit to Shiloh Hospital, please bring your medical records, including a list of current medications, past surgeries, and any chronic conditions. This information will help our medical team provide the best care possible.</li>
                    </ul>

                    {isClicked && (
                        <>
                            <div className="notice-header">
                                <div className="dot"></div>
                                <h3>Insurance and Payment Information</h3>
                            </div>
                            <ul className='notice-list'>
                                <li><strong>Insurance Coverage:</strong> Please check with your insurance provider to confirm that your plan covers the services you need. Bring your insurance card with you to the appointment.</li>
                                <li><strong>Payment Options:</strong> If you are not using insurance, please be aware of our payment options. We accept major credit cards, debit cards, and cash. Payment is due at the time of service.</li>
                            </ul>

                            <div className="notice-header">
                                <div className="dot"></div>
                                <h3>Appointment Policies</h3>
                            </div>
                            <ul className='notice-list'>
                                <li><strong>Arrival Time:</strong> Please arrive at least 15 minutes before your scheduled appointment to complete any necessary paperwork. For first-time visits, we recommend arriving 30 minutes early.</li>
                                <li><strong>Cancellation Policy:</strong> If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance. This allows us to accommodate other patients who may need care.</li>
                                <li><strong>No-Show Policy:</strong> If you miss an appointment without prior notice, you may be charged a no-show fee. Repeated no-shows may result in restrictions on future appointment bookings.</li>
                            </ul>

                            <div className="notice-header">
                                <div className="dot"></div>
                                <h3>Virtual Appointments</h3>
                            </div>
                            <ul className='notice-list'>
                                <li><strong>Telehealth Option:</strong> For your convenience, we offer virtual consultations for certain types of appointments. If you prefer to meet with your healthcare provider online, please select the telehealth option when booking your appointment.</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

            <div className="notice-btn">
                <button 
                    className="toggle-btn"
                    onClick={handleClick}
                >
                    {isClicked ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </div>
    );
}

export default AppointmentNotice;
