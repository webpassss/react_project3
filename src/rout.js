import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Component/home'
import About from './Component/about'
import Contact from './Component/contact'
import Blog from './Component/blog'
import ResponsiveAppBar from './Component/index'

export default function Rout () {
  return (
    <>
  
    <Router>
    <ResponsiveAppBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
        </Routes>
    </Router>
    </>
  )
}

