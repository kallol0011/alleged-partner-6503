import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import {BsBox2Fill} from "react-icons/bs"
import "../Styles/Dashboard.css"

import {
  

  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  SimpleGrid
} from "@chakra-ui/react";
import { AiFillCar } from 'react-icons/ai';


const getData=()=>{
  return fetch(`http://localhost:8080/products`)
  .then((res)=>res.json())
}

const Dashboard = () => {
  const [loading,setLoading]=useState(false)
  // const [Booked, setBooked] = React.useState<({});
  // const [Available, setAvailble] = React.useState({});
  const [data, setdata] = useState([])


  useEffect(()=>{
    getData().then((res)=>setdata(res))
  },[])

console.log(data)

    return (
        <Flex marginTop="60px" className='mainbox' >
            
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto"> 
        {loading ? (
          <Loader /> 
        ) : (
          <>
              <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} gap="8" className="mainbox" >
              <Box margin="20px"  width={"100%"} >
                <Text className="title" color="green">
                  AVAILABLE PRODUCTS{" "}
                </Text>
                <Flex flexWrap="wrap" justifyContent={"center"}>

                   

                  {data.map(function (el) {
                    return (
                      el.quantity >0 &&
                      <Box className="city" key={el._id} >
                        <Stat>
                          <StatLabel fontSize={"21px"} textAlign={"center"} > {el.category }  </StatLabel>
                          <StatNumber>   </StatNumber>
                          <StatHelpText>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Text color="green" fontSize={"20px"}>
                                <BsBox2Fill color="green" />
                              </Text>
                              &nbsp;
                              <Text fontSize={"20px"} fontWeight={"bold"}>
                              {el.quantity}
                              </Text>{" "}
                            </Flex>
                          </StatHelpText>
                        </Stat>
                      </Box>
                    );
                  })}
                </Flex>


              </Box>
              <Box margin={"20px"}  paddingLeft={"2%"} paddingRight={"2%"} >
                <Text className="title" color="red">
                  OUT OF STOCK PRODUCTS
                </Text>
                <Flex flexWrap="wrap" justifyContent={"center"}>
                {data.map(function (el) {
                    return (
                      el.quantity === 0 &&
                      <Box className="city" key={el._id} >
                        <Stat  >
                          <StatLabel fontSize={"21px"} textAlign={"center"} >{el.category}</StatLabel>
                          <StatNumber></StatNumber>
                          <StatHelpText>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Text color="red" fontSize={"20px"}>
                              <BsBox2Fill color="red" />
                              </Text>
                              &nbsp;
                              <Text fontSize={"20px"} fontWeight={"bold"}>
                                {el.quantity}
                              </Text>{" "}
                            </Flex>
                          </StatHelpText>
                        </Stat>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </SimpleGrid>
          </>
        )}

        </Box>
    </Flex>
    );
};

export default Dashboard;