import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import {  Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";





const getData=()=>{
  return fetch(`http://localhost:8080/feedback`)
  .then((res)=>res.json())
}


const Feedback = () => {

   const [loading,setLoading]=useState(true)

   const [data, setdata] = useState([])


   useEffect(()=>{
     getData().then((res)=>setdata(res))
     setLoading(false)
   },[])
 
 console.log(data)

    return (
        <Flex marginTop="60px" className='mainbox'   >
            
      <Box>
        <Sidebar />
      </Box>
      
        
        <Box matgin="auto" >
            {
                loading ? (<Box marginLeft="342%" marginTop="230px">
                <Loader />
              </Box>) : (
                    <>
                      <Box margin="auto" width={{lg:"80vw" , sm:"98vw" , base:"80vw"}}  marginTop="18px"  >
        <Table variant="simple" width="100%"  >
          <Thead  >
            <Tr  >
              <Th>User</Th>
              <Th>UserID</Th>
              <Th>Feedback</Th>
            </Tr>
          </Thead>
          <Tbody h={"58vh"}  >
            {data &&
              data.map((el) => {
                return (
                  <Tr key={el._id} >
                    <Th>{el.name}</Th>
                    <Th>{el._id}</Th>
                    <Th>
                      {el.feedback}
                    </Th>
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

export default Feedback;