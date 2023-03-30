import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
// import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import {MdArrowForwardIos,MdOutlineArrowBackIosNew} from "react-icons/md"
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState([])

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '20%' });
  const side = useBreakpointValue({ base: '30%', md: '0%' });

  // These are the images used in the slide
  const cards = [
    'https://m.media-amazon.com/images/I/61JkX-1tN9L._SX3000_.jpg',
    "https://m.media-amazon.com/images/I/71mcEBNGtNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81eey0BX6hL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61O759bS39L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71aJVWrz15L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51O45Sl0WLL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"
  ];

  return (
    <Box
   
   
      width={'full'}
      // overflow={'hidden'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <MdOutlineArrowBackIosNew />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <MdArrowForwardIos />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'3xl'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}