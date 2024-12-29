import React from "react"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home"
import ContactUs from "./components/Footer/Footer"
import ComingSoon from "./components/ComingSoon/ComingSoon"
import Courses from "./pages/Courses/Courses"
import Newsletter from "./pages/Newsletter/Newsletter"
import LoadingPage from "./components/Loading/LoadingPage"
import DrawerAppBar from "./components/Navbar/Navbar"

export default function App(){
  const [loading,setLoading] = React.useState(true);
  React.useEffect(()=>{
   document.body.style.overflow = "hidden";
   const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 4000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  },[])
  
  return(
    <>
    <div>
     {loading && <LoadingPage/>}
     <DrawerAppBar/>
        <Routes style={{overflow: loading ? "hidden" : "auto"}}>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/newsletter" element={<Newsletter/>}/>
        </Routes>
    </div>
    </>
  )
}