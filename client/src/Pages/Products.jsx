import { Box ,Button,Flex,Stack} from '@chakra-ui/react'
import React from 'react'
import styles from "./products.module.css"

import {useSelector,useDispatch} from "react-redux"
import {addproductCart, getData, getSingleProduct} from "../Redux/products/action"
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { Navigate, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Filtercomponenets from '../components/Filtercomponenets';
import {TiShoppingCart} from "react-icons/ti"
import {BsCart4} from "react-icons/bs"
import Footer from './Footer';



const Products = () => {

  const productsdata = useSelector((store)=>store.productdata.getProduct)
  const loading = useSelector((store)=>store.productdata.loading)
  // console.log(loading,"loading")
  const[searchParam] = useSearchParams()
  // console.log(productsdata,"productsdata")
  const dispatch = useDispatch()
  const {page} = useParams()
  const navigate = useNavigate()

  React.useEffect(()=>{
      let params ={
        category:searchParam.getAll("category")
      }
    dispatch(getData(params,page))
   
  },[productsdata?.length,searchParam,page])








  const sendToDescription=(id)=>{
//  console.log(id,"idprodcuts")  
     navigate(`/products/${page}/${id}`)
  }

  return (
    <Box 
    // border={"2px solid red"} 
    mt="4rem">
    <Box display={{base:"flex",md:"flex"}} >
      <Box minWidth="15rem">
        <Filtercomponenets></Filtercomponenets>
      </Box>
      <Box>
      {/* <Heading as="h3">Products</Heading> */}
      <Flex flexWrap="wrap" ml={"4rem"} >
        {  loading? <div>...loading</div> 
        :
       productsdata?.map((el)=> el.price && <ProductSimple key={el._id} image={el.thumbnail} 
       title={el.title}  id={el._id} el={el}
       price={el.price==undefined?{raw: '$9.47', extracted: 9.47}:el.price}
       sendToDescription={sendToDescription}
    //    category={el.condition}
       ></ProductSimple>) 
        }
      </Flex>
      </Box>
    </Box>
    
    </Box>
  )
}




 function ProductSimple({image,title,category,price,sendToDescription,id,el}) {
  const dispatch = useDispatch()
  const addToCart = (el) => {
  
    // console.log(currentproduct,"curpro")
     el&& dispatch(addproductCart(el))
  };
  //  console.log(price,"price")
  return (
    <div>
      <div className={styles.container} >
      <div className={styles.imgdiv} onClick={()=>sendToDescription(id)}>
       <img className={styles.img} src={image}></img>
       </div>
       <div >
        <p className={styles.title}>{title}</p>
       </div>
       <div className={styles.pricediv}>
       <Text fontWeight={800} fontSize={'xl'} color="#dd0285">
             {price && price.extracted || price.from.extracted}
            </Text>
       </div>
       <Button mb={".5rem"} leftIcon={<BsCart4></BsCart4>} 
       color={"white"} bg={"#dd0285"}  _hover={{ bg: '#dd0285' }}
        onClick={()=>addToCart(el)}>Add to Cart</Button>
      </div>
    </div>
  );
}

export default Products