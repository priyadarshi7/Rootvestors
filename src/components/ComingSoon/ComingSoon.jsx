import React from 'react'
import "../../components/Home/Main/Main.css"
import "./ComingSoon.css"
import DrawerAppBar from '../Navbar/Navbar'
import ContactUs from '../Footer/Footer'
import { useLocation } from 'react-router-dom'

const ComingSoon = () => {
  const location = useLocation();
  return (
    <>
    <div className='coming-soon'>
        <div className='comingsoon-text' style={{display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
          {location.pathname==="/courses" && <span className='main-text' id="main-text-2">Courses</span>}
          {location.pathname==="/newsletter" && <span className='main-text' id="main-text-2">Newsletter</span>}
          <span className='main-text' id="main-text-2">Coming Soon</span>
        </div>
        <ContactUs/>
    </div>
    </>
  )
}

export default ComingSoon