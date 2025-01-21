import React from "react"
import { Route, Routes } from "react-router-dom"
import DrawerAppBar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import LoadingPage from "./components/LoadingPage/LoadingPage";

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
    {loading && <LoadingPage/>}
    <DrawerAppBar/>
    <Routes style={{overflow: loading ? "hidden" : "auto"}}>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}