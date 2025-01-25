import React, { useState } from 'react';
import NewsletterCard from '../../components/Newsletter/NewsletterCards/NewsletterCards';
import './Newsletter.css';
import Footer from '../../components/ContactUs/ContactUs';
import NewsletterData from '../../data/NewsletterData';
import img from "../../assets/Newsletter/PageImages/newsletterimage.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Display success toast
    toast.success('Thank you for subscribing!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear the email input
    setEmail('');
  };

  return (
    <>
      <div className='newsletter-page'>
        <div className="newsletter-cards-container">
          <span className='newsletter-main-text' id="newsletter-main-text-2"> Our Newsletter</span>
          <div className='newsletter-cards'>
            {NewsletterData.map((data, index) => (
              <NewsletterCard
                key={index}
                edition={data.edition}
                volume={data.volume}
                coverImage={data.coverImage}
                content={data.content}
                pdfSrc={data.pdfSrc} // Assuming your data object includes pdfSrc for each newsletter
                date={data.date}
              />
            ))}
          </div>
        </div>
        <div className="newsletter-subscribe">
          <div className="newsletter-page-text">
            <div className="newsletter-text">
              <span>Subscribe</span> to our newsletter and stay updated
            </div>
            <div className="newsletter-subscribe-input">
              <input 
                type="text" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
          <div className="newsletter-page-img">
            <img src={img} alt="Newsletter" />
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default Newsletter;
