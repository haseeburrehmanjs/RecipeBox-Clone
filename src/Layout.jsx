import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
