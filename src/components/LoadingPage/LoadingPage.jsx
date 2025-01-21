import React from 'react'
import "./LoadingPage.css"
import LOGO from "../../assets/Images/rootvestors_nav.png"

const LoadingPage = () => {
  return (
    <div className='loading'>
<div className="pyramid-loader">
  <div className="wrapper">
    <span className="side side1"></span>
    <span className="side side2"></span>
    <span className="side side3"></span>
    <span className="side side4"></span>
    <span className="shadow"></span>
  </div>
</div>
<img src={LOGO} />
    </div>
  )
}

export default LoadingPage
