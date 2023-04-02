import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import "../Styles/Users.css"
import {
  
  Text,
  Table,
  Thead,

  Tr,
  Th,
  Tbody,
  Td,
  Image,
} from "@chakra-ui/react";

const getData=()=>{
  
  return fetch(`http://localhost:8080/admin/getuser`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }
  })
  .then((res)=>res.json())
}


const Users = () => {
    const [loading,setLoading]=useState(true)

    const [data, setdata] = useState([])


  useEffect(()=>{
    getData().then((res)=>setdata(res))
    setLoading(false)
  },[])

console.log(data)

    return (
      <Flex marginTop="60px" className='mainbox' >
            
      <Box>
        <Sidebar />
      </Box>
      
        
        <Box matgin="auto" >
            {
                loading ? (<Box marginLeft="342%" marginTop="230px">
                <Loader />
              </Box>) : (
                    <>
                      <Box margin={"auto"} width={"80vw"} marginTop="25px"   >
          <Table variant="simple" width={"100%"}>
            <Thead>
              <Tr>
                <Th>Avatar</Th>
                <Th>User Name</Th>
                <Th>User ID</Th>
                <Th>Email</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr key={el._id} >
                    <Th  width={"18%"} >
                      <Image
                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
                        alt="user"
                        
                        width={{ lg: "28%", sm: "62%", base: "28%" }}
                        borderRadius={"50%"}
                      />
                    </Th>
                    <Th>{el.firstname} {el.lastname}</Th>
                    <Th>
                      
                      {el._id}
                    </Th>
                    <Th>{el.email}</Th>
                    
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
                    </>
                )
            }
        </Box>

    </Flex>
    );
};

export default Users;


