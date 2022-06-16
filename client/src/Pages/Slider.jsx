import React from "react"
import Carousel from "react-elastic-carousel";

import { nanoid } from "nanoid";
import { Box, Heading } from "@chakra-ui/react";











const breakPoints = [{ width: 500, itemsToShow: 4 }];

const Slider = ({Sliderdata}) => {
console.log(Sliderdata,"sliderdata")
  return (
    <div>
      <h4 style={{ paddingTop: "80px" }}>Frequenty bought together</h4>

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
                <img src={item.thumbnail} />
                {/* <button className="Quicklook">Quick Look</button> */}
                <p  size="lg" textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace="nowrap">{item.title}</p>
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