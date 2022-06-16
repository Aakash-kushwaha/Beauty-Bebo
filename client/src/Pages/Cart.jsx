import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../Redux/products/action'

const Cart = () => {
   
  const cartdata = useSelector((store)=>store.productdata.cart)
  
  return (
    <div>Cart</div>
  )
}

export default Cart