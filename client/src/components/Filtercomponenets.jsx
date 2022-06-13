import { Box, Checkbox, CheckboxGroup, VStack, Text ,MenuItemOption,MenuOptionGroup,MenuDivider,Menu,MenuButton,Button,MenuList} from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import {useSearchParams} from "react-router-dom"

const Filtercomponenets = () => {
    const dispatch = useDispatch()
 const [searchParam,SetsearchParam]= useSearchParams()
 const [categoryvalues,setCategoryvalues] = React.useState(searchParam.getAll("category") || [])

 React.useEffect(()=>{
    if(categoryvalues){
      SetsearchParam(({category:categoryvalues}))
      let params ={
        category:searchParam.getAll("category")
      }
    dispatch(getData(params))
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
      <Box display={{base:"block",md:"none"}} p = "0rem ,1rem">
      <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
      </Box>
    </Box>
  )
}

export default Filtercomponenets