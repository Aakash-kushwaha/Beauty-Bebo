import { Box ,Flex,Stack} from '@chakra-ui/react'
import React from 'react'
import FilterComponents from '../components/FilterComponents'
import {useSelector,useDispatch} from "react-redux"
import { getData } from '../Redux/Products/action'
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom'



const Products = () => {

  const productsdata = useSelector((store)=>store.ecommerceData.products)
  const[searchParam] = useSearchParams()
  console.log(productsdata)
  const dispatch = useDispatch()


  React.useEffect(()=>{
    if(productsdata?.length==0){
      let params ={
        category:searchParam.getAll("category")
      }
    dispatch(getData(params))
    }
     
  },[dispatch,productsdata?.length,searchParam])

  return (
    <Box display={{base:"flex",md:"flex"}}>
    <Stack display={{md:"flex"}} flexDirection={{ md:"row"}}>
      <Box minWidth="15rem">
        <FilterComponents></FilterComponents>
      </Box>
      </Stack>  
      <Box>
      <Heading as="h3">Products</Heading>
      {/* <Flex flexWrap="wrap" justifyContent="space-around">
        {
          productsdata.map((el)=><ProductSimple key={el.id} image={el.image} title={el.title} description={el.description} category={el.category} rating={el.rating.count} price={el.price}></ProductSimple>)
        }
      </Flex> */}
  
      </Box>
    </Box>
  )
}




 function ProductSimple({image,title, description,category,rating,price}) {
   
  //  console.log(image)
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
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
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {rating}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default Products