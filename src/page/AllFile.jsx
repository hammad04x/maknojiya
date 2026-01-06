import React from 'react'
import Home from './Home'
import AboutUs from './AboutUs'
import Skills from './Skills'
// import Services from './Services'
import Projects from './Projects'
import Contact from './Contact'
import Navbar from './Navbar'

function AllFile() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Skills />
      {/* <Services /> */}
      <Projects />
      <Contact />
    </>
  )
}

export default AllFile
