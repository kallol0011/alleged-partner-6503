import React, { useState } from 'react';
import { Box, Flex, VStack , Image , FormControl, FormLabel, Input, Heading, Button} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';

const Profile = () => {
    const [loading,setLoading]=useState(false)
    return (
      

      <Flex marginTop={"60px"} className="mainbox" >
            
            <Box>
              <Sidebar />
            </Box>
            <Box overflow={"auto"} width="90%"> 
              {loading ? (
                <Box margin="auto" marginTop="230px">
                <Loader />
              </Box>
              ) : (
                <>
                  <VStack w={{lg:"47%",sm:"87%",base:"47%"}}  margin={"auto"} marginTop={"2.4%"} paddingBottom={"4%"}   >
                      <Heading color={"green.600"} pb={"4vh"} >ADMIN DETAILS</Heading>
                     <FormControl w={"71%"}   p={"4%"} borderRadius={"4%"} 
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                     >
                      <Box    >
                     <Image margin={"auto"} borderRadius={"56%"} w={"18%"}  src="https://avatars.githubusercontent.com/u/110187301?v=4" alt={"K S"} />
                     </Box>
                        <FormLabel  > Name </FormLabel>
                        <Input placeholder="kallol sarkar" />
                        <FormLabel pt="2vh" > Email Id </FormLabel>
                        <Input  placeholder="kallol007@gmail.com" />
                        <FormLabel pt="2vh" > Password </FormLabel>
                        <Input type="password" placeholder={"*******"} />
                        <Flex  justifyContent={"space-around"} mt={"4%"} >
                        <Button bg={"green.400"} w={"41%"} > Reset </Button>
                        <Button bg={"green.400"} w={"41%"} > Update </Button>
                        </Flex>
                     </FormControl>
                  </VStack>
                  
                </>
              )}
      
             </Box>
          </Flex>

    )
        
};

export default Profile;



