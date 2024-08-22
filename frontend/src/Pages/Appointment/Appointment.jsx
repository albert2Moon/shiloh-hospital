/* eslint-disable no-unused-vars */
import React from 'react'
import './Appointment.css'
import AppointmentHeader from '../../components/AppointmentHeader/AppointmentHeader'
import AppointmentForm from '../../components/AppointmentForm/AppointmentForm'
import AppointmentNotice from '../../components/AppointmentNotice/AppointmentNotice'

const Appointment = () => {
  return (
    <>
      <div>
        <AppointmentHeader />
      </div>
      <div className="appointment-container">
      <AppointmentForm />
      <AppointmentNotice />
      </div>
    </>
  )
}

export default Appointment
