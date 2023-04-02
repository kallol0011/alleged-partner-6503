import { Box, Flex, Image } from '@chakra-ui/react';
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
  
  SimpleGrid
} from "@chakra-ui/react";
import { AiFillCar } from 'react-icons/ai';


const getData=()=>{
  return fetch(`http://localhost:8080/product`)
  .then((res)=>res.json())
}

const Dashboard = () => {
  const [loading,setLoading]=useState(true)
  
  const [data, setdata] = useState([])


  useEffect(()=>{
    getData().then((res)=>{setdata(res)
      setLoading(false)
    })
  },[])


  const groupedProducts = data.reduce((group, data) => {
    if (!group[data.category]) {
      group[data.category] = [];
    }
    group[data.category].push(data);
    return group;
  }, {});


// console.log(typeof(groupedProducts))
// console.log(typeof(groupedProducts.laptop))

// let numOfKeys = Object.keys(groupedProducts).length;
// console.log(numOfKeys); // Output: 3


let categories = Object.keys(groupedProducts);
console.log(categories)


console.log(groupedProducts)

const elements = [
  "Books",
  "furniture",
  "Toys & Games",
  "Kids",
  "Pet Supplies"
];

    return (
        <Flex marginTop="60px" className='mainbox' >
            
      <Box>
        <Sidebar />
      </Box>
      <Box margin="auto" > 
        {loading ? (
          <Box margin={"auto"} ml={{base:"-167%",sm:"-86%"}}  marginTop={{lg:"192px",base:"192px",sm:"31vh"}} >
          <Loader />
        </Box> 
        ) : (
          <>
              <SimpleGrid columns={{ lg: 2, sm: 1, base: 1 }} ml="-1%" className="mainbox"  >
              <Box   width={"100%"}  >
                <Text className="title" color="green">
                  AVAILABLE PRODUCTS{" "}
                </Text>
                {/* <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9o22bmESU-hMYf09EVb30gvWpw_WJDbJer9hiVGq2XEzzRAlTo8E-3gpcQN6eJv9l45s&usqp=CAU"} alt={"chart"} /> */}
                <Flex flexWrap="wrap" display={"flex"}  justifyContent={"center"}>
                  
                  
                   

                  {Object.keys(groupedProducts).map(category =>  {
                    return (
                      
                      <Box className="city" width={{lg:"11vw",sm:"21vw"}}  >
                        <Stat>
                          
                          
                          
                          <StatLabel fontSize={"21px"} textAlign={"center"} >  
                             
                          {[category]}
                            </StatLabel>
                          <StatNumber>   </StatNumber>
                          <StatHelpText>
                            <Flex
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Text color="green" fontSize={"18px"} pr={"2%"} >
                                <BsBox2Fill color="green" />
                              </Text>
                              &nbsp;
                              <Text fontSize={"21px"}   fontWeight={"bold"}>
                              
                              {groupedProducts[category].length}
                              </Text>{" "}
                            </Flex>
                          </StatHelpText>
                        </Stat>
                      </Box>
                    );
                  })}
                </Flex>


              </Box>
              <Box margin={"21px"}  paddingLeft={"2%"} paddingRight={"2%"} marginTop={"0%"}  >
                <Text className="title" color="red">
                  OUT OF STOCK PRODUCTS
                </Text>
                {/* <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7-HdXDPIAadWkVaWPwASZbO7MFvcyv-V46w&usqp=CAU" alt="image" /> */}
                <Flex flexWrap="wrap" justifyContent={"center"}>
                {elements.map(function (el) {
                    return (
                      
                      <Box className="city" key={el._id} width={{lg:"11vw",sm:"21vw"}} >
                        <Stat  >
                          <StatLabel fontSize={"21px"} textAlign={"center"} >{el}</StatLabel>
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