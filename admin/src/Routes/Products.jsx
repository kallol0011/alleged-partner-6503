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
    Input,
  } from "@chakra-ui/react";

  import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";

import { BiSort } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import Loader from '../components/Loader';
import { Link, useNavigate } from 'react-router-dom';

const getData=(page,catagory)=>{
  // if(payload!==""){
    return fetch(`http://localhost:8080/admin/page/${page}?category=${catagory}`,{  //page/${page}?category=${catagory}
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":localStorage.getItem("token")
    }

  })
  .then((res)=>res.json())

  

  // }else{
  //   return fetch(`http://localhost:8080/admin`,{
  //     method:"GET",
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Authorization":localStorage.getItem("token")
  //     }
  
  //   })
  //   .then((res)=>res.json())
  // }
   
  
}

const Products = () => {

    const [loading,setLoading]=useState(true)
    const [category,setCategory]=useState("mobile")
    const [page,setPage]=useState(1)
    const [dlt,setdlt]=useState(1)

    const [product, setProduct] = useState([])
    
    const navigate=useNavigate()
    const toast = useToast()

    

    

    useEffect(()=>{
      getData(page,category).then((res)=>{setProduct(res)
        
        setLoading(false)
      })
    },[category,page,dlt])
    
    
    
    const deleteProduct=(id)=>{
      // 
      setdlt(Math.random())
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

    console.log("category",category)
    console.log("type",typeof(category))
     
    const Sort=()=>{
         
         
    }

    

    

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
                      value={category}
                      onChange={(e) => {
                        
                        setCategory(e.target.value)
                      }}
                      fontSize="12px"
                      fontWeight="bold"
                      width="100px"
                    >
                       
                        <option style={{fontSize:"15px"}} value="watch" > &nbsp; &nbsp; watch </option>;
                        <option style={{fontSize:"15px"}} value="mobile" > &nbsp; &nbsp; mobile </option>;
                        <option style={{fontSize:"15px"}} value="laptop" > &nbsp; &nbsp; laptop </option>;
                        <option style={{fontSize:"15px"}} value="product" > &nbsp; &nbsp; product </option>;
                        <option style={{fontSize:"15px"}} value="cream" > &nbsp; &nbsp; cream </option>;
                        <option style={{fontSize:"15px"}} value="cream" > &nbsp; &nbsp; cream </option>;
                        <option style={{fontSize:"15px"}} value="clothes" > &nbsp; &nbsp; clothes </option>;
                        <option style={{fontSize:"15px"}} value="kitchen" > &nbsp; &nbsp; kitchen </option>;
                        <option style={{fontSize:"15px"}} value="shoes" > &nbsp; &nbsp; shoes </option>;
                        <option style={{fontSize:"15px"}} value="shoes" > &nbsp; &nbsp; shoes </option>;
                        <option style={{fontSize:"15px"}} value="jewellery" > &nbsp; &nbsp; jewellery </option>;
                      
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
                {
                  product?.map((el) => {
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
            <Box my={"2vh"} mb={"4vh"} textAlign={"center"} >
            <Button w={"6vw"} disabled={page===1} onClick={()=>setPage(page-1)} >prev</Button>
            <Button mx={"1vw"} >{page}</Button>
            <Button w={"6vw"} onClick={()=>setPage(page+1)} >next</Button>
            </Box>
          </>
        )}
      </Box>
    </Flex>
    );
};

export default Products;