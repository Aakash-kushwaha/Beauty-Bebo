import { Box, Checkbox, CheckboxGroup, VStack, Text ,MenuItemOption,MenuOptionGroup,MenuDivider,Menu,MenuButton,Button,MenuList} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from "react-router-dom"

const Filtercomponenets = () => {
    const dispatch = useDispatch()
 const [searchParam,SetsearchParam]= useSearchParams()
 const [categoryvalues,setCategoryvalues] = React.useState(searchParam.getAll("category") || [])


 const categoryHandler=(value)=>{
  // console.log(value,"value")
     setCategoryvalues(value)   
}



 React.useEffect(()=>{
    if(categoryvalues){
      SetsearchParam(({category:categoryvalues}))
      let params ={
        category:searchParam.getAll("category")
      }
    // dispatch(getData(params))
    }
 
  },[categoryvalues,searchParam])


  return (
    <Box>
      <Box display={{base:"none",md:"block"}} p="1rem 1rem">
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={categoryvalues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"}>
    <Checkbox value={`men's clothing`}>men's clothing</Checkbox>
    <Checkbox value={`women's clothing`}>Women's clothing</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
    <Checkbox value='jewelery'>Jewellery</Checkbox>
    {/* <Checkbox value='100'>less than 100₹</Checkbox> */}
  </VStack>
</CheckboxGroup>
      </Box>
  
    </Box>
  )
}

export default Filtercomponenets