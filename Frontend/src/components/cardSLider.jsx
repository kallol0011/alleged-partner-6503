import { background, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
               <Image width={"300px"} height={"200px" } src={el.img}/>
              <Flex gap={4} >
              <Button  background={"red"} height="20px">up to {el.discount}% off</Button>
               <Text color="black">Deal of the Day</Text>
              </Flex>
              </div>
            })}
        </Slider>
      </div>
    );
  }
}