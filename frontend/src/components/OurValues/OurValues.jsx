import React from 'react'
import './OurValues.css'

const OurValues = () => {
  return (
    <>
        <div className="container-title">
                <div className="title-dot"></div>
                <h3>Our Values</h3>
            </div>

            <div className="values-container">
                <div className="value-card">
                    <div className="content-card ">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Empathy</h3>
                        </div>
                        <p>We strive to understand our colleagues, our patients, and their loved ones so as to share in their feelings. </p>
                    </div> 
                </div>
                <div className="value-card">
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Social Responsibility</h3>
                        </div>
                        <p>Our community is our priority. We accept responsibility to educate and promote health in our community.</p>
                    </div> 
                </div>
                <div className="value-card">
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Respect</h3>
                        </div>
                        <p>We embrace diversity, equity and inclusion within our faith values and cultural norms. </p>
                    </div> 
                </div>
                <div className="value-card">
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Integrity</h3>
                        </div>
                        <p>Act with honesty and truthfulness in all patient care and business activities </p>
                    </div> 
                </div>
                <div className="value-card">
                    <div className="content-card">
                        <div className="content-header">
                            <div className="dot"></div>
                            <h3>Excellence</h3>
                        </div>
                        <p>Strive to offer high quality evidence-based care through commitment to lifelong learning and improvement.</p>
                    </div> 
                </div>
            </div>
    </>
  )
}

export default OurValues
