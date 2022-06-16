import axios from "axios"
import Axios  from "axios"
import * as types from "./actionType"


const fetchdatarequest=(payload)=>{
    return{
        type : types.FETCH_DATA_REQUEST,
        payload
    }
}
const fetchdatasuccess=(payload)=>{
    return{
        type : types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchdatafailure=(payload)=>{
    return{
        type : types.FETCH_DATA_FAILURE,
        payload
    }
}






const singleProductRequest=(payload)=>{
    return{
        type : types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}
const singleProductSuccess=(payload)=>{
    // console.log(payload,"sucesspayload")
    return{
        type : types.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}
const singleProductFailure=(payload)=>{
    return{
        type : types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}






const addproductCartRequest=(payload)=>{
    return{
        type : types.ADD_PRODUCT_CART_REQUEST,
        payload
    }
}
const addproductCartsuccess=(payload)=>{
    console.log(payload,"payload")
    return{
        type : types.ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}
const addproductCartfailure=(payload)=>{
    return{
        type : types.ADD_PRODUCT_CART_FAILURE,
        payload
    }
}



const fetchCartRequest=(payload)=>{
    return{
        type : types.FETCH_CART_REQUEST,
        payload
    }
}
const fetchCartsuccess=(payload)=>{
    // console.log(payload,"cartpayload")
    return{
        type : types.FETCH_CART_SUCCESS,
        payload
    }
}
const fetchCartfailure=(payload)=>{
    return{
        type : types.FETCH_CART_FAILURE,
        payload
    }
}









const getData=(payload,page)=>{
   
    return(dispatch)=>{
        dispatch(fetchdatarequest())
        // console.log(id,"id")
 Axios.get(`/${page}`,{
       params:{
           ...payload
       }
   }).then((r)=>{ dispatch(fetchdatasuccess(r.data))}).catch((e)=>dispatch(fetchdatafailure(e.data)))
}
}





const getSingleProduct=(page,id)=>{
    return(dispatch)=>{
        dispatch(singleProductRequest())
//    console.log("page",page,"id",id)
   Axios.get(`/${page}/${id}`)
   .then((r)=>{dispatch(singleProductSuccess(r.data))})
   .catch((e)=>dispatch(singleProductFailure(e.data)))
}
}

const getCartData=()=>dispatch=>{
    dispatch(fetchCartRequest())
    Axios.get("/cart").then((res)=>dispatch(fetchCartsuccess(res.data)))
    .catch((err)=>dispatch(fetchCartfailure(err.data)))
}



const  addproductCart =(product)=>(dispatch)=>{
    // console.log(product,"product")
    dispatch(addproductCartRequest())
    console.log(product,"pro")

   Axios.post("/cart",product)
   .then((res)=>{dispatch(addproductCartsuccess(res.data))})
   .catch((err)=>{dispatch(addproductCartfailure(err.data))})
}















export {getData,getSingleProduct,
    addproductCart,
    getCartData}    