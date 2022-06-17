
// import "./slider.css";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Box, Heading } from "@chakra-ui/react";





  let slideshow = [
    "https://www.beautybebo.com/pub/media/mega-menu/slider-3.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-2.jpg",
    "https://www.beautybebo.com/pub/media/mega-menu/slider-1.jpg",
  ];

  
  export const Slideshow = () => {
    var settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
    };
  
    const renderSlides = () =>
      slideshow.map((num) => (
        <div className="slideshow"  key={num}>
          <img style={{width:"100%",height:"350px"}} src={num}></img>
        </div>
      ));
    return (
      <div style={{display:"flex",marginTop:"3rem"}}>
      <div style={{width:"400px",height:"300px" ,padding:"2rem" ,lineHeight:"2rem"}}>
      <Heading fontSize={"18px"}>All Catogories</Heading>
        <Box>MakeUp</Box>
        <Box>Skin</Box>
        <Box>Hair</Box>
        <Box>Personal Care</Box>
        <Box>Mom and Baby Care</Box>
        <Box>Fregrence</Box>
        <Box>Ayurveda</Box>
      </div>
        <div style={{width:"70%",height:"300px"}} className="slideSliderApp">
          <Slider style={{width:"100%",height:"100%"}} {...settings}>{renderSlides()}</Slider>
        </div>
        .
      </div>
    );
  };
  