import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    const faqs = [
        {
            question: "What is In Vitro Fertilization?",
            answer: `Naturally in humans, fertilization (the fusion of the sperm and egg) happens in the fallopian tube.
            Then the embryo moves into the uterine cavity 3-5 days later. "In Vitro" is Latin for "in Glass". 
            In Vitro Fertilization is where the eggs are obtained from the woman and fertilized with sperm obtained 
            from the male partner, but outside the body, only to transfer the embryo (fertilized egg) into the uterine 
            cavity 3-5 days later.`
        },
        {
            question: "What is third party reproduction?",
            answer: `For a couple to have a successful pregnancy, a healthy uterus, good sperm, and a quality egg are required.
            In the event that any one of these is not available, the option is to have a third party, one outside the primary 
            couple seeking a baby. Third-party reproduction is when a couple uses donated eggs, donated sperm, or a gestational 
            carrier to help them achieve their dream of having a baby. Third-party reproduction is a sophisticated process 
            involving different experts including a legal team, fertility experts, psychologists, etc.`
        },
        {
            question: "What is the IVF success rate of IVF fertility treatment?",
            answer: `Over the years, IVF success rates across the world have improved markedly. IVF success rate is a measure 
            of live births per embryo transfer. The chances of success are higher in younger women (under 35 years). Noteworthy, 
            globally, the average IVF success rate is around 40% in women younger than 35 years. Success rates strongly depend 
            on the age of the patient, cause of infertility, underlying medical conditions, BMI, and the line of treatment 
            administered. At Shiloh Hospital, we strive towards improving IVF success rates by leveraging advanced technology 
            and standardizing the procedures.`
        },
        {
            question: "How does IVF fertility treatment work?",
            answer: `IVF refers to a procedure where the woman's eggs are removed from her ovaries and fertilized with the man's 
            sperm in a laboratory. The embryos (fertilized eggs) formed are then put back into the uterus to achieve a pregnancy.`
        },
        {
            question: "How long should I wait before consulting a fertility doctor?",
            answer: `Both you and your spouse may find it emotionally demanding to wait for the double pink line on the pregnancy test.
            It's critical to wake up and accept the possibility that you could eventually need to speak with a fertility doctor. 
            For various women, this point is different. If you're under 35, you should typically consider seeing a doctor after a year 
            of trying; if you're over 35, you should think about doing so after six months of trying. Make an appointment with your 
            IVF specialist to discuss whether your fertility has been impacted if you have a medical history of thyroid disease, 
            endometriosis, polycystic ovarian syndrome, pelvic inflammatory disease, or fibroids.`
        }
    ];
    

return (
    <>
        <div className="container-title">
            <div className="title-dot"></div>
            <h3>FAQs</h3>
        </div>

        <div className="faqs-container">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className={`faqs-card ${activeIndex === index ? 'expanded' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <div className="faqs-card-heading">
                        <div><h2>{index + 1}.</h2></div>
                        <div><p>{faq.question}</p></div>
                        <div className="faqs-card-dropdown">
                        <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    </div>
                    {activeIndex === index && (
                        <div className="faqs-card-content">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                    {/* <div className="faqs-card-dropdown">
                        <i className={`fa-solid ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div> */}
                </div>
            ))}
        </div>
    </>
);
}

export default FAQs;
