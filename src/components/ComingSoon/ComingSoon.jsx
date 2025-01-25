import React from 'react'
import "./ComingSoon.css"
import Footer from '../ContactUs/ContactUs'

const ComingSoon = () => {
  return (
    <>
    <div className='coming-soon'>
        <div className='comingsoon-text' style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
         <span className='coming-main-text' id="main-text-2">Courses</span>
        <span className='coming-main-text' id="main-text-2">Coming Soon</span>
        </div>
       <Footer/>
    </div>
    </>
  )
}

export default ComingSoon