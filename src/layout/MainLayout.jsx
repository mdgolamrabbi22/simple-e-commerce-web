import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>

       
    </>
  )
}
