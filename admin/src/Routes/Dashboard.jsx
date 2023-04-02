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
import BarChart from '../components/Charts';
import PieChart from '../components/PieChart';


const baseUrl=`https://strange-crown-worm.cyclic.app`

const getData=()=>{
  // if(payload!==""){
    return fetch(`https://strange-crown-worm.cyclic.app/admin`,{  //page/${page}?category=${catagory}
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }

  })
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
                  AVAILABLE PRODUCTS    {" "}
                </Text>
                  <Box width={{lg:"43vw",sm:"100vw"}}  >
                      
                      <BarChart/>
                    
                    </Box> 
                <Flex flexWrap="wrap" display={"flex"}  justifyContent={"center"} mt={"4.9vh"} >
                  
                  
                   

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
                <Text className="title" color="red.600">
                  OUT OF STOCK PRODUCTS
                </Text>
                <Box m={"auto"}   w={"60%"}  >
                  <PieChart/>
                </Box>
                <Flex flexWrap="wrap" justifyContent={"center"} mt={"2vh"} >
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