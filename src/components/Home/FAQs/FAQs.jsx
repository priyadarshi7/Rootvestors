import React, { useState } from 'react';
import './FAQs.css';
import arrow from '../../../assets/icons/FAQarrows.png';
import FAQData from '../../../data/FAQData'; // Import FAQ data

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-container" id="FAQ">
      <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="3500"
        data-aos-delay="300"
      >
        FAQs
      </h1>
      <div className="flex-container">
        <div className="column">
          {FAQData.slice(0, FAQData.length / 2).map((faq, index) => (
            <div
              className="faq-block"
              key={faq.id}
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="3000"
              data-aos-delay={600 + index * 300}
            >
              <div
                className={`question ${
                  activeQuestion === faq.id ? 'expanded' : 'collapsed'
                }`}
                onClick={() => toggleAnswer(faq.id)}
              >
                {`${index + 1}: ${faq.question}`}
                <img src={arrow} alt="arrow" />
              </div>
              <div
                className={`answer ${
                  activeQuestion === faq.id ? 'show' : ''
                }`}
                id={faq.id}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="column">
          {FAQData.slice(FAQData.length / 2).map((faq, index) => (
            <div
              className="faq-block"
              key={faq.id}
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="3000"
              data-aos-delay={600 + index * 300}
            >
              <div
                className={`question ${
                  activeQuestion === faq.id ? 'expanded' : 'collapsed'
                }`}
                onClick={() => toggleAnswer(faq.id)}
              >
                {`${index + FAQData.length / 2 + 1}: ${faq.question}`}
                <img src={arrow} alt="arrow" />
              </div>
              <div
                className={`answer ${
                  activeQuestion === faq.id ? 'show' : ''
                }`}
                id={faq.id}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
