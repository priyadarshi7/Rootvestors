import React from 'react'
import "./Home.css"
import DrawerAppBar from '../../components/Navbar/Navbar'
import Main from '../../components/Home/Main/Main'
import FAQs from '../../components/Home/FAQs/FAQs'
import ContactUs from '../../components/Footer/Footer'
import Newsletter from '../../components/Home/Newsletter/Newsletter'
import Main2 from '../../components/Home/Main2/Main2'
import AboutUs from '../../components/Home/AboutUs/AboutUs'

const Home = () => {
  return (
    <div className='home' id="home">
        <Main/>
        <Main2/>
        {/* <FAQs/> */}
        <AboutUs/>
        <Newsletter/>
        <ContactUs/>
    </div>
  )
}

export default Home