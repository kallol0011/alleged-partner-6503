import React, { useState } from 'react';
import { Box, Flex, VStack , Image , FormControl, FormLabel, Input, Heading, Button, Text, Checkbox, useToast} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import amazon_logo from "../Images/Amazon_logo.png" 
import { CSSVariablesProvider } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [loading,setLoading]=useState(false)
    // const [checkBox, setcheckbox] = useState(false)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstname,setfirstname] = useState("")
    const [lastname,setlastname] = useState("")


    const toast = useToast()

const navigate=useNavigate()



    const Submit=()=>{
        var data={firstname:firstname,email:email,password:password,lastname:lastname}
 
          console.log(data)


    fetch(`https://strange-crown-worm.cyclic.app/user/register`,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      toast({
        title: 'Register successful',
        description: "you have been successfully registered please log in to move foroward",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top'
      })
      navigate("admin/login")
      
    })

  }

  





    return (
      

      <Flex marginTop={"60px"} className="mainbox"  bg={"yellow.400"} >
            
            
            <Box overflow={"auto"} width="90%"> 
              {loading ? (
                <Box margin="auto" marginTop="230px">
                <Loader />
              </Box>
              ) : (
                <>
                
                  <VStack  w={{lg:"47%",sm:"87%",base:"47%"}}  margin={"auto"} marginTop={"1%"} ml={"31%"} paddingBottom={"4%"} >
                      <Box  >
                     <Image margin={"auto"}   w={"24%"}  src={amazon_logo} alt={"name"}/>
                     </Box>
                     <FormControl w={"74%"}   p={"4%"} borderRadius={"4%"} bg={"white"}
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                     >
                      <Text fontSize={"28px"} pb={"2vh"} textAlign={"center"}  > Sign Up </Text>
                        
                        <FormLabel > first name    </FormLabel>
                        <Input   value={firstname} onChange={(e)=>setfirstname(e.target.value)} placeholder="enter your first name" />
                        <FormLabel mt={"1vh"} > last name    </FormLabel>
                        <Input   value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="enter your last name" />
                       
                        <FormLabel mt={"1vh"} > Email Id </FormLabel>
                        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" />
                        <FormLabel mt={"1vh"}> Password  <span style={{marginLeft:"9.99vw",color:"royalblue"}} >forgot your password?</span>  </FormLabel>
                        <Input mb={"2vh"} type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" />
                        <Text > <Checkbox  mt={"5px"} mr={"2px"} /> by continuing, your agree to Amazon's <span style={{color:"royalblue",cursor:"pointer"}}>conditions of use and privacy notice</span> </Text>
                        <Flex  justifyContent={"space-around"} mt={"4%"} >
                        <Button bg={"yellow.400"} w={"41%"} onClick={Submit} > Sign Up </Button>
                        
                        </Flex>
                     </FormControl>
                  </VStack>
                  
                </>
              )}
      
             </Box>
          </Flex>

    )
        
};

export default Register;



