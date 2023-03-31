import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({category,discount,image,offer,price,rating,title,view,_id}) => {
  return <Box display={"flex"} color={"black"} pb={2} >
   <Box w={"30%"} textAlign={"center"} >
   <Image  bg={'blueAlpha.600'}src={image} />
   </Box>
   <Box w={"100%"}  background={"white"} >
     <Heading size={"md"}>{title}</Heading>
     <Text w={"20%"} background={"red"}>{offer}</Text>
     <Heading size={"md"}>{price} {discount}</Heading>
   </Box>
  </Box>
}

export default ProductCard