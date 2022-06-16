import { Box } from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'
// import data from "../dataslider/data.json"
import { useSelector } from 'react-redux'

const Home = () => {

   const slidedata = useSelector((store)=>store.productdata.data)
    console.log(slidedata,'data')
    const face = slidedata.filter((item) => {
      return item.title.includes("Face");
    });

    const skin = slidedata.filter((item) => {
      return item.title.includes("Skin");
    });

    const eye = slidedata.filter((item) => {
      return item.title.includes("Eye");
    });

    const make = slidedata.filter((item) => {
      return item.title.includes("Make");
    });

    // console.log(women,"sliderdata")


  return (
    <Box>
    <Slider Sliderdata={face}></Slider>  
    <Slider Sliderdata={skin}></Slider>   
    <Slider Sliderdata={eye}></Slider>   
    <Slider Sliderdata={make}></Slider>   
    </Box>

  )
}

export default Home