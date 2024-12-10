import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ContactUs from "./components/Footer/Footer"
import ComingSoon from "./components/ComingSoon/ComingSoon"
import Courses from "./pages/Courses/Courses"
import Newsletter from "./pages/Newsletter/Newsletter"

export default function App(){
  return(
    <>
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
        </Routes>
    </div>
    </>
  )
}