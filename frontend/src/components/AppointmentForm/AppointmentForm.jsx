/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './AppointmentForm.css'

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        information: '',
        appointment: '',
        date: '',
        time: '',
        tel: '',
        consultation: '',
        reason: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send the data to a server)
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className='appointment-form'>

            <fieldset>

                <legend>Appointment Form</legend>

                <h3>Personal Information</h3>

                <div className='form-card'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Full Name'
                        autoComplete=''
                        required
                    />
                </div>

                <div className='form-card'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                        required
                    />
                    <input
                        type="tel"
                        name="tel"
                        id="tel"
                        value={formData.tel}
                        onChange={handleChange}
                        placeholder='Phone' />
                </div>



                <h3>Appointment Details</h3>

                <div className="form-card">

                    <div>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder='Preferred Date'
                            required />

                        <input
                            type="time"
                            name="time"
                            id="time"
                            value={formData.time}
                            onChange={handleChange}
                            placeholder='preferred Time'
                            required />
                    </div>


                    <select name="consultation" id="consultation"
                    value={formData.consultation}
                    onChange={handleChange} required>
                        <option value="placeholder">Type of Consultation</option>
                        <option value="option1">Initial Consultation</option>
                        <option value="option2">Follow Up</option>
                        <option value="option3">Fertility Treatment</option>
                    </select>

                    <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder='Reason for Appointment (optional)'
                    />
                </div>

                <h3>Additional Information</h3>

                <div className='form-card'>
                    <textarea
                        id="information"
                        name="information"
                        value={formData.information}
                        onChange={handleChange}
                        placeholder=' Any existng medical conditons or relevant health history (optonal)'
                        required
                    />

                    <select
                        name="appointment"
                        id="appointment"
                        value={formData.appointment}
                        onChange={handleChange}
                        required
                        >

                        <option value="placeholder"> Preferred contact method</option>
                        <option value="method1">Email</option>
                        <option value="method2">Phone</option>
                    </select>

                </div>

            <div className="appointment-btn">
                <button type="submit" className='appointment-form-btn'>Schedule Appointment</button>
            </div>

            </fieldset>
        </form>
    );
};

export default AppointmentForm
