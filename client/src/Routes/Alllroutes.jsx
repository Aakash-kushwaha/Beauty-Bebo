import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Navbar from '../components/Navbar'

const Alllroutes = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Products></Products>
        <Routes>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
        </Routes>
    </div>
  )
}

export default Alllroutes