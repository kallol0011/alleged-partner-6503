import { background, Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
   slidesToScroll: 5,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div width="80%" style={{padding:"20px", background:"white",color:"black",marginTop:'20px'}} >
        <Heading size={"md"}>Today's Deals</Heading>
        <Slider {...settings}>
            {this.props.items.map((el)=>{
                return  <div width="30%">
              <Flex direction={'column'}  
              justifyContent={'space-between'}
               alignItems={'center'}
                boxShadow={'lg'}
                p='3'
                overflow={'hidden'}
                minH='17rem' maxH='17rem'm={'1.5'}>
              <Image fit={'contain'} src={el.img}/>
              <Flex gap={2} >
               <Text color="black">Deal of the Day</Text>
               <Text  background={"blackAlpha.700"}color="white" textAlign={"center"} pl={1} pr={1}>up to {el.discount}% off</Text>
              </Flex>
              </Flex>
              </div>
            })}
        </Slider>
      </div>
    );
  }
}