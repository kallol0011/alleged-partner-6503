import { background, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class ImgSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 7,
   slidesToScroll: 7,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };
    return (
      <div width="80%" style={{padding:"20px", background:"white",color:"black",marginTop:'20px'}} >
        <Heading size={"md"}>{this.props.title}</Heading>
        <Slider {...settings}>
            {this.props.items.map((el)=>{
                return  <div width="30%">
               <Image width={"200px"} height={"170px" } src={el.img}/>
              </div>
            })}
        </Slider>
      </div>
    );
  }
}