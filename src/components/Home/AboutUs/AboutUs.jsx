import React from 'react'
import iiit from '../../../assets/logos/3D_Logo.png'
// import hackasolabout from '../assets/images/hackimage-final.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./AboutUs.css"

AOS.init({once: true}); 


export default function AboutUs(){


    return (
        <div className="main-about-us" id="About Us">
                 <span className='main-text-about' id="main-text-2">About Us</span>
            <div className="two-boxes-div1">
                {/* <img src={iiit} alt="rootvestors" data-aos="zoom-in" data-aos-delay="200"></img> */}
                <div>
                    <div className="about-us-small">
                    <div className="about-iiit-img" onClick={() => window.open('https://www.iiitnr.ac.in/', '_main')}></div><h2>Our Vision</h2>
                    </div>
                    <div className="small-content"  lang="en" data-aos="zoom-in" data-aos-delay="200">At Rootvestors, we are reshaping the future of education and transforming how individuals learn, develop, and succeed in the digital era. We believe education extends far beyond traditional classrooms and methodologies; it is a continuous journey that should be accessible, personalised, and empowering.</div>
                </div>
            </div>

            <div className="two-boxes-div2">
                <div>
                    <div className="about-us-small">
                    <div className="about-hack-small-img" onClick={() => window.open('https://sac.iiitnr.ac.in/', '_main')}></div><h2>Our Mission</h2>
                    </div>
                    <div className="small-content" lang="en" data-aos="zoom-in" data-aos-delay="250">We are here with a commitment to innovation and upgrade in education.Our mission is to develop innovative, globally-focused learning solutions that blend cutting-edge technology, engaging content, and personalized educational approaches.</div>
                </div>
                {/* <img src={iiit} alt="rootvestors" data-aos="zoom-in" data-aos-delay="250"></img> */}
            </div>
            
        </div>
    )
}