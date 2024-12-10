import React from 'react'
import IMAGE from "../../../assets/images/Newsletter-home.png"
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <div className="home-newsletter">
        <div className="home-newsletter-text">
            <div className="newsletter-content">
            <h1>Want to stay connected with us?</h1>
            <div className="home-newsletter-p">
            <p>Subscribe to our newsletter for the latest updates, exclusive content, and more.</p>
            <p>Join our community today and never miss a thing!"</p>
            {/* <div className="newsletter-email">
                <input type="email" placeholder='example@gmail.com'/>
            </div> */}
            <h1 style={{margin:"0px", marginTop:"10px"}}>Coming Soon!</h1>
            </div>
            </div>
        </div>
        <div className="home-newsletter-image">
            <img src={IMAGE} alt="newsletter"/>
        </div>
    </div>
  )
}

export default Newsletter