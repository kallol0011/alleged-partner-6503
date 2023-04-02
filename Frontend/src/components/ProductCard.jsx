import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = ({category,discount,image,offer,price,rating,title,view,_id}) => {
  return <Box display={"flex"} color={"black"} pb={2} gap={10} mt={20}>
   <Box w={"30%"} textAlign={"center"} >
   <Image  bg={'blueAlpha.600'}src={image} />
   </Box>
   <Box w={"100%"}  background={"white"} gap={15} >
     <Heading  fontSize={18} >{title}</Heading>
    
     <Text w={"20%"} background={"red"} color={"white"} pl={5} mt={2}>{offer}</Text>
     <Heading size={"md"} mt={2}>{price} {discount}</Heading>
     <Heading size={"3sm"} mt={2}>Free Delivery by Shoppers ⭐</Heading>
   </Box>
  </Box>
}

export default ProductCard