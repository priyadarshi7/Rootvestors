import React from "react"
import "./HomeSection1.css"
import LOGO from "../../../assets/logos/LOGO.png"

export default function HomeSection1(){
    return(
        <div className="home-section-1">
            <div className="home-section-1-text">
            <div className="home-section-1-text-desc">
                    Welcome to
                </div>
                <div className="h2">Rootvestors</div>
                <div className="home-section-1-text-desc">
                    Transforming Nation:from
                    Roots to Reality
                </div>
            </div>
            <div className="home-section-1-img">
                <img src={LOGO} />
            </div>
        </div>
    )
}