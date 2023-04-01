import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Loader from '../components/Loader';
import {  Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";





// const getData=()=>{
//   return fetch(`http://localhost:8080/feedback`)
//   .then((res)=>res.json())
// }


const Feedback = () => {

   const [loading,setLoading]=useState(false)

   const [data, setdata] = useState([])


  //  useEffect(()=>{
  //    getData().then((res)=>setdata(res))
  //    setLoading(false)
  //  },[])



  const feedback=[
    {
      "_id":14463563563563653653,
      "name":"kallol",
      "userId":"1",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":24463563563563653653,
      "name":"kallol",
      "userId":"2",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":34463563563563653653,
      "name":"kallol",
      "userId":"3",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":44463563563563653653,
      "name":"kallol",
      "userId":"4",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":54463563563563653653,
      "name":"kallol",
      "userId":"11",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":64463563563563653653,
      "name":"kallol",
      "userId":"11",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":74463563563563653653,
      "name":"kallol",
      "userId":"11",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    },
    {
      "_id":84463563563563653653,
      "name":"kallol",
      "userId":"11",
      "feedback":"website's user interface and delivery service is fantastic. Thanks for providing such a great shopping experience!"
      
    }
  
  
   ]

   

    return (
        <Flex marginTop="60px" className='mainbox'   >
            
      <Box>
        <Sidebar />
      </Box>
   
      {/* {testId}
{testname}
{testuserID}
{testfeedback} */}
        
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
            
              {
                feedback.map((el)=>{
                  return (
                  <Tr key={el._id} >
                    <Th>{el.name}</Th>
                    <Th>{el._id}</Th>
                    <Th>
                      {el.feedback}
                    </Th>
                  </Tr>

                  )            
 
                })
                  
              }
                
                
              
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