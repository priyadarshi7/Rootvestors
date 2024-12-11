import React from 'react'
import rootvestora_mobile from "../../../assets/images/Rootvestors_mobile.png"
import "./Main2.css"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Main2 = () => {
  return (
    <div className='home-mobile'>
        <div className="home-mobile-container">
        <img src={rootvestora_mobile} data-aos="fade-up"
     data-aos-duration="3000" />
        <div className="overlay">
        <span>Say goodbye to</span>
        <div>
        <div className='span2'>outdated learning methods</div>
        </div>
        <div className='span3'>"Discover a new, engaging way to learn!"</div>
        </div>
        </div>
        <Link to="/courses"><button style={{cursor:"pointer"}}>View Courses</button></Link>
    </div>
  )
}

export default Main2