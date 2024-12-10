import React from 'react'
import "./Home.css"
import DrawerAppBar from '../../components/Navbar/Navbar'
import Main from '../../components/Home/Main/Main'
import FAQs from '../../components/Home/FAQs/FAQs'
import ContactUs from '../../components/Footer/Footer'
import Newsletter from '../../components/Home/Newsletter/Newsletter'
import Main2 from '../../components/Home/Main2/Main2'

const Home = () => {
  return (
    <div className='home' id="home">
        <DrawerAppBar/>
        <Main/>
        <Main2/>
        <FAQs/>
        <Newsletter/>
        <ContactUs/>
    </div>
  )
}

export default Home