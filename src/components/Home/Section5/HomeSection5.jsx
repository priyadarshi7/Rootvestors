import React from "react";
import "./HomeSection5.css";
import img from "../../../assets/Home/Images/rootvestors_app2.png";

export default function HomeSection5() {
    return (
        <div className="home-section-4-container">
            <div className="home-section-4-text">
                <h2>DOWNLOAD APP</h2>
                <p className="home-section-4-text-desc">
                    Kickstart your Journey to <br />
                    Academic Excellence
                </p>
                <p className="home-section-4-text-desc-2">
                    Download our app today and unlock a world of learning at your fingertips, available on both Play Store and iOS. Coming Soon!
                </p>
            </div>
            <div className="home-section-4-img">
                <img src={img} alt="Rootvestors App" />
            </div>
        </div>
    );
}
