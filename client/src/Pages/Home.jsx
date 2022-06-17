import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from './Slider'
// import data from "../dataslider/data.json"
import { useSelector } from 'react-redux'
import  { Slideshow } from './Carousel'


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
    // console.log(women,"sliderdata")


  return (
    <Box>
     {/* <Sidemenu></Sidemenu> */}
    <Slideshow></Slideshow>
    <div style={{marginTop:"4.5rem"}}>  <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/blue_heaven.jpg"}></img></div>
  
    
    <Slider Sliderdata={face}></Slider>  
    <div style={{display:"flex",justifyContent:"space-around"}}> 
    <div><img  src={"https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"}></img></div>
     <div><img  src={"https://www.beautybebo.com/pub/media/mega-menu/beeone.jpg"}></img></div>
     </div>
    <Slider Sliderdata={skin}></Slider>  
    <div style={{marginTop:"3.5rem"}}>  <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/mega-menu/homepage.jpg"}></img></div> 
    <Slider Sliderdata={eye}></Slider>   
    <div style={{marginTop:"3.5rem"}}>  <img style={{margin:"auto"}} src={"https://www.beautybebo.com/pub/media/mega-menu/offer.gif"}></img></div> 
     <Heading style={{padding:"1rem",fontSize:"20px"}}>Welcome to Beauty Products Online Shopping India- Beauty Bebo</Heading>
    <div style={{padding:"2rem",lineHeight:"2rem"}}> <p style={{fontSize:"14px"}}>If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.

Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you buy beauty products online!</p>

<p style={{fontSize:"14px"}}>Clean Your Face First!

Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash beauty products online for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your buy cosmetic online shopping will be worth your time and effort.

Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.

Apply a Moisturizer</p>

<p style={{fontSize:"14px"}}>Next, you need a moisturizer in your makeup kit. Moisturizers keep your face glowing regardless of the mood of the day. Most essentially, moisturizers will keep your skin hydrated from the outside, while your constant hydration by taking fluids enhance the efforts.

Our moisturizers range from matte, ponds, creams and gels, all to ensure that your specific need is met. Just go through the list for a better selection, which will aid you through your cosmetic online shopping. With the best moisturizer, it will also work as a primer. Hence, you don’t have to buy an extra product, which saves you some cost.

Get Your Makeup Kit</p>

<p style={{fontSize:"14px"}}>Your general makeup will consist, of more than the moisturizer. Some o the other major components include the foundation, which you use on your whole face. Then there is the concealer, which you concentrate on areas of the face you want to hide. There is the brightener and highlighter, which you will highlight areas you want conspicuous on your face.

And don’t forget to look into our range of toners for your best shot at a firmer face and neck.

We have the most effective beauty products India has dreamt of to replenish your kit, so don’t miss out!

Enhance the Outlook of the Eyes</p>

<p style={{fontSize:"14px"}}>At this point, your eyebrows should be in the shape and size you want them to be. Now you can brush them up to bring out a perfect outlook. Apply eye pencil to cover any gaps within the eyebrows for an ideal outlook.

If the area surrounding your eyes has a different color shade, probably more tanned or lighter in color in comparison to your general face color, then pay attention to the area.

Use concealers to bring out the perfect shade you want for a uniform outlook. Alternatively, you can use the highlighter to bring attention to your eyes, which even adds to a seemingly large-eye size.

If your eyes are starting to show wrinkles, then our under-eye wrinkle creams from our cosmetic online shop should come in handy.

Want to finish up with a luminating cosmetic product for a conspicuously radiant look? Go ahead and make your makeup experience more appealing.

Your Lips?</p>

<p style={{fontSize:"14px"}}>  For a natural beauty look, go for a glossy lip gloss or a light lipstick. Or are you going out with the girls, and thicker lips your way? Our range of matte lipstick collection should work for you.

Bottom Line

Want to buy beauty products online to improve your makeup kit? We are always there for you, ready to help.

All you have to do is take a step, look into our products and try us. Looking forward to seeing you!</p>
</div>  </Box>

  )
}

export default Home