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
                  <VStack w={{lg:"47%",sm:"87%",base:"47%"}}  margin={"auto"} marginTop={"4%"} paddingBottom={"4%"}   >
                      <Heading color={"green.600"} >ADMIN DETAILS</Heading>
                     <FormControl w={"74%"}   p={"4%"} borderRadius={"4%"} 
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                     >
                      <Box    >
                     <Image margin={"auto"} borderRadius={"56%"} w={"18%"}  src="https://bit.ly/dan-abramov" alt={"name"} />
                     </Box>
                        <FormLabel> Name </FormLabel>
                        <Input  />
                        <FormLabel> Email Id </FormLabel>
                        <Input  />
                        <FormLabel> Password </FormLabel>
                        <Input  />
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



