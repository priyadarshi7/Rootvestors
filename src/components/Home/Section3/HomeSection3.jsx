import React from "react";
import "./HomeSection3.css";
import img from "../../../assets/Home/Images/HomeSection3.png";

export default function HomeSection3() {
  return (
    <div className="home-section-3">
      <div className="home-section-3-image-container">
      <div className="home-section-3-text">
            <h2 style={{margin:"0"}}>How does</h2>
            <h2 style={{ margin:"0"}}><span style={{color:"#4285F4"}}> Rootvestors</span> address this problem?</h2>
            <p>By Bridging the gap between current education system</p> <p style={{margin:"0"}}>and Real-World Excellence</p>
          </div>
        <img src={img} alt="rootvestors-img" className="home-section-3-image" />
      </div>
    </div>
  );
}
