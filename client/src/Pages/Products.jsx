import { Box ,Flex,Stack} from '@chakra-ui/react'
import React from 'react'

import {useSelector,useDispatch} from "react-redux"
import {getData} from "../Redux/products/action"
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { useParams, useSearchParams } from 'react-router-dom'
import Filtercomponenets from '../components/Filtercomponenets';



const Products = () => {

  const productsdata = useSelector((store)=>store.productdata.getProduct)
  const loading = useSelector((store)=>store.productdata.loading)
  console.log(loading,"loading")
  const[searchParam] = useSearchParams()
  console.log(productsdata,"productsdata")
  const dispatch = useDispatch()
  const {id} = useParams()
  

  React.useEffect(()=>{
      let params ={
        category:searchParam.getAll("category")
      }
    dispatch(getData(params,id))
   
  },[productsdata?.length,searchParam])

  return (
    <Box display={{base:"flex",md:"flex"}}>
    <Stack display={{md:"flex"}} flexDirection={{ md:"row"}}>
      <Box minWidth="15rem">
        <Filtercomponenets></Filtercomponenets>
      </Box>
      </Stack>  
      <Box>
      <Heading as="h3">Products</Heading>
      <Flex flexWrap="wrap" justifyContent="space-around" justify={"flex"}>
        {  loading? <div>...loading</div> 
        :
       productsdata?.map((el)=><ProductSimple key={el._id} image={el.thumbnail} 
       title={el.title} 
       price={el.price==undefined?{raw: '$9.47', extracted: 9.47}:el.price}></ProductSimple>) 
        }
      </Flex>
  
      </Box>
    </Box>
  )
}




 function ProductSimple({image,title,category,price}) {

   
   console.log(price,"price")
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
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
            _after: {
              filter: 'blur(20px)',
            },
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
            {/* {category} */}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Products