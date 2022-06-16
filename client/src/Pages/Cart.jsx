import React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../Redux/products/action'

const Cart = () => {

   const [data,setData] = useState([])
  const cartdata = useSelector((store)=>store.productdata);
  console.log(cartdata,"cardata")
 useEffect(()=>{
  setData(cartdata)
 },[cartdata])


  console.log(cartdata)
 
  return (
    <div>
      <div className="Items grid grid-cols-2 bg-black border-black">
 
      </div>
      <div className="summary">ddfdsfdsfsafsfd</div>
    </div>
  )
}

export default Cart