import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Navbar from '../components/Navbar'
import Product from '../Pages/Product'

const Alllroutes = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/products/:id" element={<Products></Products>}></Route>
           <Route path='/products/:id/:description' element={<Product></Product>}></Route>
        </Routes>
     
    </div>
  )
}

export default Alllroutes