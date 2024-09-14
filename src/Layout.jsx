import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import Header from './components/Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <Outlet/>
    </>
  )
}

export default Layout
