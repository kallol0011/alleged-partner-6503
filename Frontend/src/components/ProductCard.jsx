import { Badge, Box, Button, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom'

const ProductCard = ({category,discount,image,offer,price,rating,title,view,_id}) => {
  return <> <Flex  color={"black"}  background={"white"}  p={"2"} justifyContent={"space-evenly"}>
   <Box w={"30%"}  pl={"2"} pr={"2"}  margin={"auto"} >
   <Image w={"60%"} src={image}  margin={"auto"} />
   </Box>
   <Box bg={"blackAlpha.50"} p={"4"} w={"60%"} lineHeight={"5"} >
     <Heading mb={"2"} size={"sm"}>{title}</Heading>
     <Badge  pt={"2"}  fontSize={"md"} colorScheme='red'>{price}{discount}</Badge>
     <Badge pt={"2"} fontSize={"md"} colorScheme='blue'>{offer}</Badge>
   <Flex pt={"2"} alignItems={"center"}>
   <Icon  as={AiFillEye}  />
     <Text>{view}</Text>
   </Flex>
   <label >{"\u2605 \u2606 \u2606 \u2606 \u2606"}{`(${rating})`}</label>
   
   <Link to={`/product/${_id}`}><Text pt={"5"} fontSize={"xl"} color={"white"}> <Button bg={"blue.400"} > View more </Button>  </Text></Link>
   </Box>
  </Flex>

  </>
}

export default ProductCard