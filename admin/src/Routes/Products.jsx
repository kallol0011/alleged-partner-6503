import React, { useEffect, useState } from 'react';
import "../Styles/Products.css"
import Sidebar from '../components/Sidebar';
import {
    Flex,
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Th,
    Tr,
    Td,
    Button,
    Select,
  } from "@chakra-ui/react";

  import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

import { BiSort } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

const getData=()=>{
   return fetch(`http://localhost:8080/product`)
    .then((res)=>res.json())
}

const Products = () => {

    const [loading,setLoading]=useState(true)
    const [cetagory,setCetagory]=useState(false)
    const [product, setProduct] = useState([])
    
    const navigate=useNavigate()

    const elments = [
      "watch",
      "mobile",
      "kitchen",
      "bag",
      "earphone",
      "laptop",
      "mens",
      "womens",
      "cameras",
    ];


    useEffect(()=>{
      getData().then((res)=>{setProduct(res)
      
        setLoading(false)
      })
    },[])


    // let filterCatagory=

    return (
        <Flex marginTop={"60px"} className="mainbox" >
      <Box   >
        <Sidebar />
      </Box>
      <Box overflow={"auto"} width="90%">
        {loading ? (
          <Box margin="auto" marginTop="230px">
            <Loader />
          </Box>
        ) : (
          <>
            {" "}
            <Table variant="simple" fontSize={"sm"}>
              <Thead>
                <Tr>
                  <Th>Picture</Th>
                  <Th>Title</Th>
                  <Th display={"flex"} justifyContent={"space-around"}>
                    <Text>Price 	&nbsp;	&nbsp;	&nbsp;	&nbsp; </Text>
                    <Button 
                    // onClick={() => SetSort(!sort)} color="red"
                    >   
                      <BiSort />
                    </Button>
                  </Th>
                  <Th>Discount</Th>
                  <Th>Rating</Th>
                  <Th  >
                    <Select
                      placeholder="CAREGORY"
                      variant="flushed"
                      onChange={(e) => {
                        // dispatch(PageChange(1));
                        // setLocation(e.target.value);
                        setCetagory(e.target.value)
                      }}
                      fontSize="12px"
                      fontWeight="bold"
                      width="100px"
                    >
                       {elments.map((el) => {
                        return <option style={{fontSize:"15px"}} > &nbsp; &nbsp;{el}</option>;
                      })} 
                    </Select>
                  </Th>
                  <Th color={"red.600"} textAlign={"center"}>
                    <Button 
                    onClick={() => navigate("/addproduct")}
                    >
                      <MdAddCircle />
                    </Button>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {product &&
                  product.map((el) => {
                    return (
                      
                      <Tr key={el._id} >
                        <Td width={"111px"}  >
                          <img src={el.image}  alt={el.title} />
                        </Td>
                        <Td >{el.title}</Td>
                        <Td>₹{ el.price}</Td>
                        <Td>{el.discount}</Td>
                        <Td>
                          <Flex alignItems={"center"}>
                            <Box >
                              {/* <RxDotFilled /> */}
                            </Box>

                            {el.rating } ⭐
                          </Flex>
                        </Td>
                        <Td>{el.category}</Td>
                        <Td className="ope">
                          <Flex>
                            <Button
                              variant={"outline"}
                            //   onClick={() => navigate(`/update/${el._id}`)}
                            >
                              <FiEdit color="green" />
                            </Button>
                            <Button
                              variant={"outline"}
                              marginLeft="5px"
                            //   onClick={() => dispatch(deleteCar(el._id!, page))}
                            >
                              <MdDeleteForever color="green" />
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
            {/* {Pagination(page, count, handlePageChange)}{" "} */}
          </>
        )}
      </Box>
    </Flex>
    );
};

export default Products;