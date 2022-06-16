import React from 'react';
import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCartData } from '../Redux/products/action'

const Cart = () => {


   const [data,setData] = useState([]);
  const [qty,setQty]=useState(1);
  const [totalPrice,setTotalPrice] = useState(0)
 useEffect(()=>{
  const getdata =async()=>{
    const res = await fetch("http://localhost:8080/cart");
    let data = await res.json();
    setData(data);
    console.log(data)
  }
  getdata();
 },[])
 return (
    <div className="grid grid-cols-10 gap-2 pt-16 bg-red">
      <div className="Items col-span-7 pl-20">
    <div>SHOPPING CART</div>
    <div className="upperIndicate  grid grid-cols-12">
      <div className ="col-span-7 text-sm font-semibold text-slate-400">ITEM</div>
      <div className ="col-span-2 text-sm font-semibold text-slate-400 pl-12">PRICE</div>
      <div className ="col-span-1 text-sm font-semibold text-slate-400 pl-7">QTY</div>
      <div className ="col-span-2 text-sm font-semibold text-slate-400 pl-10">SUBTOTAL</div>
    </div>
    {data.map((el,i)=>{
      {/* el.data.price.extracted */}
      
     
      let total =el.data.price.extracted*qty
      return <div key={i}>
      <div className="border-t-4 border-b-2 grid grid-cols-10 pt-2">
        <div className="col-span-2 border-2"><img className="w-40 h-40 p-8" src={el.data.thumbnail} alt=""></img></div>
        <div className="col-span-4 pl-4 text-sm font-semibold">{el.data.title}</div>
        <div className="col-span-2 pl-8">{el.data.price.raw}</div>
        <div className="border-2 h-10 w-8 content-between justify-between pl-3 pt-2">{qty}</div>
        <div>{total}</div>
        </div>
        <div>
          <button className="border-2 border-black-400 w-20 mr-10 mt-4 mb-2 p-1 hover:bg-pink-700 hover:text-white  ">Edit</button>
          <button className="border-2 border-black-400 w-28 text-sm p-1 hover:bg-pink-700 hover:text-white ">Remove Item</button>
        </div>
      </div>
    })}
    <div className="border-2"></div>
    <button className="border-2 border-black-400 w-48 text-sm p-2 bg-pink-600 hover:bg-slate-700 hover:text-white  mr-10 mt-4 mb-2 ">CONTINUE SHOPPING</button>
    <button className="border-2 border-black-400 w-48 text-sm p-2  bg-pink-600 hover:bg-slate-700 hover:text-white ">UPDATE SHOPPING CART</button>
      </div>
      <div className="summary border-2 h-fit col-span-3 mt-2  p-8">
      <div>SUMMARY</div>
        <div className="border-2 p-2 text-sm font-bold  text-black-600 bg-slate-200">ESTIMATE SHIPPING AND TAX</div>
        <div className="grid grid-cols-4 border-2 p-2 mt-2 mb-2 text-sm  text-black-400">
          <div className="col-span-3">SUBTOTAL</div>
          <div>{totalPrice}</div>
        </div>
        <div className="grid grid-cols-4 border-2 p-2 mt-2 mb-2 text-sm  text-black-400">
          <div className="col-span-3 text-sm  text-black-400">Shipping (Best Way - Max 7 Business days)	</div>
          <div >{totalPrice}</div>
        </div>
        <div className="grid grid-cols-4 border-2 p-2 mt-2 mb-2 text-sm  text-black-400">
          <div className="col-span-3">Shipping (Best Way - Max 7 Business days)	</div>
          <div>{totalPrice}</div>
        </div>
        <div className="border-2 p-2 text-sm font-bold  text-black-600 bg-slate-200">APPLY DISCOUNT CODE</div>
        <div className="border-2 p-2 text-sm font-bold  text-black-600 bg-pink-600  pl-20 pt-3 pb-3 mt-5 hover:bg-slate-700 hover:text-white">PROCEED TO CHECKOUT</div>
      </div>

    </div>
  )
}

export default Cart