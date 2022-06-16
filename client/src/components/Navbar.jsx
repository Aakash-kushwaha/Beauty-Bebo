import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";

import {
  Box,
  Flex,
  IconButton,
  Image,

  Input,

  Select,

} from "@chakra-ui/react";
import "./navbarBottomSelect.css";
import React from "react";
import logo from "./images/beautybebo.png";
// import flag from "../Assets/flag.jpg";
import { FiSearch } from "react-icons/fi";
;


export const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

const Search=()=>{
  navigate(`/products/${searchValue}`)
}
  return (
    <Box bg={"white"}>
      <Flex
        maxWidth={"90%"}
        m={"auto"}
        maxHeight="10rem"
        minH={"5rem"}
        pt="0.5rem"
        // border={"2px solid red"}
        justify="space-between"
      >
        <Flex 
      
        width={"84%"}
          flexDirection="row"
          alignItems="center"
        
          // border={"2px solid black"}
          justifyContent="space-around"
          // margin="auto"
        >
          <Image
            src={logo}
            cursor="pointer"
            maxWidth="20rem"
            maxHeight="15rem"
            height={"5rem"}
            alt="Logo"
            // bgColor="#318FFB"
          ></Image>

          <Flex bgColor={"white"}  border={"1px solid lightgray"} alignItems="center">
            <Select placeholder="All Categories" maxWidth="10rem" fontSize={"14px"} border={"none"}>
            {/* <option value="option1">All Categories</option> */}
              <option value="option1">--Make up</option>
              <option value="option2"> ----Face</option>
              <option value="option3">------Foundation</option>
              <option value="option3">------Blush</option>
              <option value="option3">------Highlighter</option>
              <option value="option3">------Concealer</option>
              <option value="option3">------Compact & Powder</option>
              <option value="option3">------Face Primer</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Bronzer</option>
              <option value="option3">------BB Cream</option>
              <option value="option3">------Loose Powder</option>
              <option value="option3">------Makeup Remover</option>
              <option value="option3">------Setiig Spray</option>
              <option value="option3">------Makeup Kit</option>
              <option value="option3">------CC Cream</option>
            </Select>
            <Input
              placeholder="Search By Keyword"
              width={"30rem"}
             border="none"
             onChange={(e)=>setSearchValue(e.target.value)}
            />
            <IconButton
              bg="#dd0285"
              aria-label="Search database"
              color={"white"}
              fontSize="1.5rem"
              borderRadius={"0"}
              onClick={()=>Search()}
              icon={<FiSearch />}
            />
          </Flex>
        </Flex>

         <Box>
         <Flex    border={"2px solid pink"}>
         <Profile></Profile>
         <Box>Add Account</Box>
         </Flex>
        
         </Box>

      </Flex>
    </Box>
  );
};
