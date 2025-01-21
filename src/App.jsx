import React from "react"
import { Route, Routes } from "react-router-dom"
import DrawerAppBar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"

export default function App(){
  return(
    <>
    <DrawerAppBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}