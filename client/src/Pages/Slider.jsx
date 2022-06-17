import React from "react"
import Carousel from "react-elastic-carousel";

import { nanoid } from "nanoid";
import { Box, Heading } from "@chakra-ui/react";











const breakPoints = [{ width: 500, itemsToShow: 4 }];

const Slider = ({Sliderdata}) => {
console.log(Sliderdata,"sliderdata")
  return (
    <div>
      <h4 style={{ paddingTop: "4rem" }}></h4>

      {Sliderdata?<div className="lookSliderApp">
        <Carousel breakPoints={breakPoints}>
          {Sliderdata.map((item) => {
            return (
                <Box
                onClick={() => {
                //   navigate("description");
                //   description_data(dispatch, item);
                }}
                className="slippersContainer"
                key={nanoid()} >
                <img style={{margin:"auto"}} src={item.thumbnail} />
                {/* <button className="Quicklook">Quick Look</button> */}
                <p style={{ textOverflow:"ellipsis", overflow:"hidden" , margin:"auto" , height:"50px" ,width:"90%"}}>{item.title}</p>
                {/* <p>{item.price.raw || item.price.from.raw}</p> */}
              </Box>
            );
          })}
        </Carousel>
      </div>:""}
    </div>
  );
};


export default Slider