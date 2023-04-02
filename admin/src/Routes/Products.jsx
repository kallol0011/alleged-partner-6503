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
    useToast,
  } from "@chakra-ui/react";

  import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

import { BiSort } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import Loader from '../components/Loader';
import { Link, useNavigate } from 'react-router-dom';

const getData=()=>{
   return fetch(`http://localhost:8080/product`)
    .then((res)=>res.json())
}

const Products = () => {

    const [loading,setLoading]=useState(true)
    const [cetagory,setCetagory]=useState(false)
    const [product, setProduct] = useState([])
    
    const navigate=useNavigate()
    const toast = useToast()


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
    
    
    
    const deleteProduct=(id)=>{
      // 
      console.log(id)
      fetch(`http://localhost:8080/admin/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
        }

      })
      .then((res)=>res.json())
      .then((res)=>{console.log(res)
        toast({
          title: 'Delete.',
          description: "Product is deleted successfully",
          status: 'success',
          duration: 9000,
          position:"top",
          isClosable: true,
        })
      })

    }

    console.log(product)
     
    const Sort=()=>{
         
         
    }

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
                      onClick={()=>Sort()}
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
                    onClick={() => navigate("/admin/addproduct")}
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
                           <Link to={`/admin/updateproduct/${el._id}`} > <Button
                              variant={"outline"}
                            
                            >
                              <FiEdit color="green"  />
                            </Button>
                            </Link>
                            <Button
                              variant={"outline"}
                              marginLeft="5px"
                               onClick={()=>deleteProduct(el._id)}
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