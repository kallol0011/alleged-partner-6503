import React, { useState } from 'react';
import { Box, Flex, VStack , Image , FormControl, FormLabel, Input, Heading, Button, Text, Checkbox, useToast} from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import amazon_logo from "../Images/Amazon_logo.png" 
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading,setLoading]=useState(false)
    // const [checkBox, setcheckbox] = useState(false)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


    const toast = useToast()
    const navigate=useNavigate()




    const Submit=()=>{
        var data={
            email,
            password,
            
          }
 
          console.log(data)

          fetch(`http://localhost:8080/user/login`,{
      
      method:"POST",
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      localStorage.setItem("token",res.token)
      toast({
        title: 'log in successful',
        description: "you have been successfully loged in to your amazon account",
        status: 'success',
        duration: 9000,
        position: 'top',
        isClosable: true,
      })
      

      navigate("/admin/products")
      
    })

  


  }







    return (
      

      <Flex marginTop={"60px"} className="mainbox" h={"91.5vh"} bg={"yellow.400"} >
            
            
            <Box overflow={"auto"} width="90%"> 
              {loading ? (
                <Box margin="auto" marginTop="230px">
                <Loader />
              </Box>
              ) : (
                <>
                  <VStack  w={{lg:"47%",sm:"87%",base:"47%"}}  margin={"auto"} marginTop={"4%"} ml={"31%"} paddingBottom={"4%"} >
                      <Box  >
                     <Image margin={"auto"}   w={"24%"}  src={amazon_logo} alt={"name"}/>
                     </Box>
                     <FormControl w={"74%"}   p={"4%"} borderRadius={"4%"} bg={"white"}
                      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                     >
                      <Text fontSize={"28px"} pb={"2vh"} textAlign={"center"}  >Log-In</Text>
                        
                        <FormLabel> Email Id </FormLabel>
                        <Input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email" />
                        <FormLabel mt={"2vh"}> Password  <span style={{marginLeft:"11.2vw",color:"royalblue"}} >forgot your password?</span>  </FormLabel>
                        <Input mb={"3vh"} type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter your password" />
                        <Text > <Checkbox  mt={"5px"} mr={"2px"} /> by continuing, your agree to Amazon's <span style={{color:"royalblue",cursor:"pointer"}}>conditions of use and privacy notice</span> </Text>
                        <Flex  justifyContent={"space-around"} mt={"4%"} >
                        <Button bg={"yellow.400"} w={"41%"} onClick={Submit} > Log In </Button>
                        
                        </Flex>
                     </FormControl>
                  </VStack>
                  
                </>
              )}
      
             </Box>
          </Flex>

    )
        
};

export default Login;



