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
  return fetch(`http://localhost:8080/users`)
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
                <Th>Location</Th>
                <Th>Order Id</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((el) => {
                return (
                  <Tr key={el._id} >
                    <Th  width={"18%"} >
                      <Image
                        src={el.avatar}
                        alt="user"
                        // width={"28%"}
                        width={{ lg: "28%", sm: "62%", base: "28%" }}
                        borderRadius={"50%"}
                      />
                    </Th>
                    <Th>{el.name}</Th>
                    <Th>
                      {/* {el._id} */}
                      {el.userId}
                    </Th>
                    <Th>{el.email}</Th>
                    <Th>  </Th>
                    <Th>{el.orderId}</Th>
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


