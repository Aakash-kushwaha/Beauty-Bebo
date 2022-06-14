import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Input,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { addproductCart, getSingleProduct } from '../Redux/Products/action';

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";

export default function Product() {
  const [qty, setqty] = React.useState(1);
  //   const {id} = useParams()
  //   const dispatch = useDispatch()
  //   // console.log(params)
  //   const currentproduct = useSelector((store)=>store.ecommerceData.currproduct)

  // const loading = useSelector((store)=>store.ecommerceData.loading)

  //   console.log(currentproduct,"currentpro")

  //   React.useEffect(()=>{
  //     if(id){
  //       dispatch(getSingleProduct(id))
  //     }

  //   },[id])

  const addToCart = () => {
    // console.log(currentproduct,"curpro")
    //   currentproduct&& dispatch(addproductCart(currentproduct))
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex
          shadow={"2xl"}
        //   border="1px solid red"
          h={{ base: "100%", sm: "400px", lg: "500px" }}
        >
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            fit={"contain"}
            align={"center"}
            w={"90%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
            m="auto"
          />
        </Flex>
        <Stack
          spacing={{ base: 6, md: 10 }}
        //   border="1px solid red"
          shadow={"xl"}
        >
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={500}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              {/* {currentproduct.title} */} Nike Headphones bhi bnanta hai
            </Heading>
          </Box>
          {/* <Box >{Rating({rating:Number(currentproduct?.rating?.rate)})} </Box> */}
          {/* <Box>  <BsStarFill
               
                style={{ marginLeft: '1' }}
                color={'teal.500' }
              /></Box> */}
          <Box>
            <Text textAlign={"left"} p={"2"} ml={"6"} color="#dd0285">
              In Stock
            </Text>
            <Text 
            // border="1px solid black" 
            textAlign={"left"} p={"2"} ml={"6"}>
              Brand New
            </Text>
          </Box>

          <Text
            pl={"2rem"} 
            fontWeight={"700"}
            // border="1px solid black"
            textAlign={"left"}
            color="#dd0285"
            fontSize={"16PX"}
          
          >
            {/* {currentproduct.price} */}₹20000
          </Text>

          <Box display={{base:"row", lg:"flex"}}
        //    border={"1px solid green"} 
           gap="1rem">
            <Box display="flex">
               <Box pl="1rem">QTY</Box>
              <Button
                width="10px"
                bg={"white"}
                height={"40px"}
                leftIcon={<ChevronDownIcon></ChevronDownIcon>}
              ></Button>
              <Box  width="50px" height="40px">
                {qty}
              </Box>
              <Button
                width="10px"
                height={"40px"}
                bg={"white"}
                leftIcon={<ChevronUpIcon></ChevronUpIcon>}
              ></Button>
            </Box>

            <Box>
              <Button leftIcon={<BsCart4></BsCart4>} background={"#dd0285"}>
                Add To Cart
              </Button>
            </Box>
          </Box>
           
           <Box display={{base:"row" ,lg:"flex"}} p={"1"}  gap={{base:"1rem" ,lg:"1rem"}} height={"50px"} >    
           <Box border={"0.2px solid black"} bg="#f1f1f1" fontSize={"md"} fontWeight="bold" p={"1"} mb={"1"}>100% GENUINE PRODUCT</Box>
          <Box border={"1px solid black"} bg="#f1f1f1" fontSize={"md"} fontWeight="bold" p={"1"}  mb={"1"}>EASY RETURN POLICY</Box>
          </Box>
      
          <Box> 
          <Stack direction="row" alignItems="center" justifyContent={"center"} mt={"1rem"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
          </Box>
        </Stack>
      </SimpleGrid>
      <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{/* {currentproduct.description} */}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{" "}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box>
          </Stack>
    </Container>
  );
}

function Rating({ rating }) {
  return (
    <Box display="flex">
      {Array(5)
        .fill("")
        .map((_, i) => {
          {
            /* console.log("rating",rating) */
          }
          const roundedRating = Math.round(rating * 2) / 2;

          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={"teal.500"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}
