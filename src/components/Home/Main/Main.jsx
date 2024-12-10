import React from 'react'
import Logo3D from "../3D_Model/3DLogo"
import "./Main.css"

const Main = () => {
  return (
    <div className='home-main'>
        <div className="main-logo">
        <img src="/3D_Logo.png" alt="3D Logo" className="tilted-logo" />
        </div>
        <div className="main-texts">
          <span className='main-text' id="main-text-1">Welcome to</span>
          <span className='main-text' id="main-text-2">Rootvestors</span>
          <span className='main-text' id="main-text-3">Nurturing growth from the roots</span>
          <hr></hr>
          <span className='main-text' id="main-text-4">
          We’re not just another financial education platform—we're cultivating a thriving community
          </span>
        </div>
    </div>
  )
}

export default Main