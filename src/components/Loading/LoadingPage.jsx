import React from 'react'
import "./LoadingPage.css"
import LOGO from "../../assets/logos/rootvestors_nav.png"

const LoadingPage = () => {
  return (
    <div className='loading'>
<div class="pyramid-loader">
  <div class="wrapper">
    <span class="side side1"></span>
    <span class="side side2"></span>
    <span class="side side3"></span>
    <span class="side side4"></span>
    <span class="shadow"></span>
  </div>
</div>
<img src={LOGO} />
    </div>
  )
}

export default LoadingPage
