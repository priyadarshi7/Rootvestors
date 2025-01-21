import React from "react"
import "./Home.css"
import HomeSection1 from "../../components/Home/Section1/HomeSection1"
import HomeSection2 from "../../components/Home/Section2/HomeSection2"
import HomeSection3 from "../../components/Home/Section3/HomeSection3"
import HomeSection4 from "../../components/Home/Section4/HomeSection4"
import HomeSection5 from "../../components/Home/Section5/HomeSection5"

export default function Home(){
    return(
        <div className="home">
            <HomeSection1/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
            <HomeSection5/>
        </div>
    )
}