import { Axios } from 'axios'
import React from 'react'

function Login() {
  const getdata =async()=>{
    let res = await fetch("http://localhost:8080/facewash")
    let data = await res.json()
    console.log(data)
  }

  let data = {
    title:"aaksh",
    link:"wwww.google.com"

  }



  const Postdata =async(value)=>{
   let res= await fetch("http://localhost:8080/facewash",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(
        value
      )

    })
    let data = await res.json()
    console.log("postdata",data)
  
  }

  
React.useEffect(()=>{
//  getdata()
//  Postdata(data)
},[])


  return (
    <div>Login</div>
  )
}

export default Login