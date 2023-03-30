import { Box, Center, Heading, position, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return <>
  <Box bg={"#37475a"} >
<Center p={"4"}>
    <Heading onClick={()=> window.scrollTo(0, 0)} size={"sm"}>Back to Top</Heading>
</Center>
  </Box>
<Box bg={"#232f3e"} p={10}>
    <Box w={"60%"} display="flex" margin={"auto"} justifyContent="space-between" >
    <Box class="col-md-3"w="20%" lineHeight={"8"}>
          <Heading size={"md"}>Get to know us</Heading>
          <a href="#" class="text-white">About</a> <br />
          <a href="#" class="text-white">Careers</a> <br />
          <a href="#" class="text-white">Press Release</a> <br />
          <a href="#" class="text-white">Investment</a> <br />
          <a href="#" class="text-white">Offers</a> <br />
        </Box>
        <Box class="col-md-3" w="20%" lineHeight={"8"}>
          <Heading size={"md"}>Connect With Us</Heading>
          <a href="#" class="text-white">Facebook</a> <br />
          <a href="#" class="text-white">Twitter</a> <br />
          <a href="#" class="text-white">Instagram</a> <br />
        </Box>
        <Box class="col-md-3" w="20%" lineHeight={"8"}>
          <Heading size={"md"}>Make Money With Us</Heading>
          <a href="#" class="text-white">Sell on Amazon</a> <br />
          <a href="#" class="text-white">Affiliate Marketing</a> <br />
          <a href="#" class="text-white">Fullfilment Center</a> <br />
          <a href="#" class="text-white">Advertise Your Product</a> <br />
          <a href="#" class="text-white">Amazon Pay</a> <br />
        </Box>
        
        <Box class="col-md-3" w="20%" lineHeight={"8"}>
          <Heading size={"md"}>Let Us Help You</Heading>
          <a href="#" class="text-white">COVID 19</a> <br />
          <a href="#" class="text-white">Your Account</a> <br />
          <a href="#" class="text-white">Returns</a> <br />
          <a href="#" class="text-white">Funding</a> <br />
          <a href="#" class="text-white">Help</a> <br />
        </Box>
    </Box>
</Box>
<Center>
<Box bg={"#232f3e"} m={4} >
            <p>
               <i class="far fa-copyright"></i> 1996-2020, Amazon.com Inc.
             </p>
          </Box>
</Center>
  </>
}

export default Footer