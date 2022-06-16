import { Box ,Button,Flex,Stack} from '@chakra-ui/react'
import React from 'react'

import {useSelector,useDispatch} from "react-redux"
import {getData, getSingleProduct} from "../Redux/products/action"
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
    <Box>
    <Box display={{base:"flex",md:"flex"}} >
    <Stack width="40%" display={{base:"none" ,lg:"flex"}} flexDirection={{ md:"row"}}  border="1px solid red">
      <Box minWidth="15rem">
        <Filtercomponenets></Filtercomponenets>
      </Box>
      </Stack>  
      <Box>
      <Heading as="h3">Products</Heading>
      <Flex flexWrap="wrap" ml={"4rem"} >
        {  loading? <div>...loading</div> 
        :
       productsdata?.map((el)=><ProductSimple key={el._id} image={el.thumbnail} 
       title={el.title}  id={el._id}
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




 function ProductSimple({image,title,category,price,sendToDescription,id}) {

   
//    console.log(price,"price")
  return (
    <Center py={12} border={"1px solid teal"} display="flex" zIndex={"-10"}   textAlign="center">
      <Box onClick={()=>sendToDescription(id)}
        role={'group'}
        // p={6}
        maxW={'320px'}
        maxH={"400px"}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
      
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _groupHover={{
        
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Heading as={"h2"} fontSize={'14px'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
             {price && price.extracted || price.from.extracted}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
            </Text>
          </Stack>
        </Stack>
        <Box><Button leftIcon={<BsCart4></BsCart4>} background={"#dd0285"}>Add To Cart</Button></Box>
      </Box>
    </Center>
  );
}

export default Products