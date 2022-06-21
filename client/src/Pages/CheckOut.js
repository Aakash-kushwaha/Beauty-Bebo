import axios from 'axios';
import React ,{useContext} from 'react'
import {useNavigate} from 'react-router-dom';

function CheckOut() {
  const navigate =useNavigate();
 const [data,setData] = React.useState([])
 
  const handleDelete =async(id)=>{
    const res =await fetch("https://beautybeboproject.herokuapp.com/cart/"+id,{
      method: "DELETE",
     headers: {'Content-Type': 'application/json'}
    })
    let newdata= await res.json();
   
    console.log(newdata,id)
   
   }
   React.useEffect(()=>{
    const getdata = async()=>{
    const res = await fetch("https://beautybeboproject.herokuapp.com/cart");
      let data = await res.json();
      setData(data)
      console.log(data,"chekcoutdata");
    }
     getdata()
   },[])
    const navigateTOHome =() =>{
        
      
      data.map((el)=>{
       handleDelete(el._id)
      })
    //  alert("Your order is placed You are now moved to Home Page");
    //  navigate("/");
    }
   

  return (
    <div className="pt-16 bg-white-400">
   <div className=" flex">
   <div className ="form w-2/3  ml-14 ">
   
    <form className="pl-10">
    
    <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ">
    Email Address
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
           <br></br>
           <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
 First Name
  </span>
  <input type="email" name="First-Name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Last Name
  </span>
  <input type="email" name="Last Name" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
   Street Address
  </span>
  <input type="email" name="Street-Address" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
   City
  </span>
  <input type="email" name="City" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
  State
  </span>
  <input type="email" name="State" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
   Zip/Postal Code
  </span>
  <input type="email" name="Zip-Code" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
        <br></br>
        <label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
   Country
  </span>
  <input type="email" name="Country" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5 sm:text-sm focus:ring-1" placeholder="example" />
</label>
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Phone Number
  </span>
  <input type="email" name="Phone-Number" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  w-4/5  sm:text-sm focus:ring-1" placeholder="example" />
</label>
    </form>
    <div className="font-bold text-xl mt-8 ">Delivery Charges</div>
    <hr className="border-2 border-slate-200 mt-4 mb-2"></hr>
    <input type="radio" name=""></input>
    <span className="font-bold">55</span>
    <span className="ml-44 text-sm mr-52">Max 7 Business Days</span>
    <button className="bg-gray-400 p-2 pl-4 pr-4 text-sm text-white" onClick={navigateTOHome}>NEXT</button>
    </div>
    <div className="ordersummary pl-12   bg-slate-100 mt-12 h-40  w-96"> 
    <div className="font-bold text-xl mt-8 ">ORDER SUMMARY</div>
    <div className=" border-2 border-slate-300 pl-2 mt-6 p-2 text-sm text-slate-400 mr-10">1 ITEM IN CART</div>
    </div>
   </div>
   
    </div>
  )
}

export default CheckOut