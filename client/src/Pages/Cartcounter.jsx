import { Box } from '@chakra-ui/react'
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getCartData } from '../Redux/products/action'


const Cartcounter = () => {
 const cart = useSelector((store)=>store.productdata.cart)
//  console.log(cart,"cartdatafetche")
 const dispatch = useDispatch()
 React.useEffect(()=>{
        
                dispatch(getCartData())
    
 },[cart?.length])
  return (
    <Box textColor={"white"}
     backgroundColor="black"
      borderRadius="50%"
      width="20px"
      height="20px"
      textAlign="center"
      position="absolute"
      right="0"
      top="0"
    
      >
      {cart?.length? cart.length:0}
      </Box>
  )
}

export default Cartcounter