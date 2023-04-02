//   import "./Css/Cart.css";
  import "./Cart.css"
 import {

 
    Button,
   
    Flex,
    Text,
    Input,
  
    TableContainer,
    Table,
    Thead,
    Tr,
    Td,
    Th,
    Box,
    DrawerFooter,
    SimpleGrid,
    Tbody,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef, useState } from "react";

 import { BsCart2, BsFillPersonFill, BsShieldFillCheck } from "react-icons/bs";
 import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";
//import { fetchAllProducts } from "../Redux/CartReducer/action";
//import { removeitem } from "../Redux/CartReducer/action";
// import { updateData } from "../Redux/CartReducer/action";
import {allProducts} from "../Redux/CartReducer/action"
import { useDispatch, useSelector } from 'react-redux';

import { decreaseCartQuantity,deleteAllFromCart, increaseCartQuantity, removeDataFromCart } from "../Redux/CartReducer/action"

 const Cart=()=>{
    
   const dispatch = useDispatch();
   
   //const [CartData, setCartData] = useState([]);
    
     const [show, setShow] = useState(false);
     const [TotalSum, setTotalSum] = useState(0);
     const cartData = useSelector(state => state.cartReducer.cartData);
  
    useEffect(() => {
      handleGetData()
    }, []);

    
    useEffect(() => {
      let sum = 0;
      cartData.forEach((item) => (sum += item.price * item.quantity));
      setTotalSum(sum);
      // TotalPrice();
     
    }, [cartData,TotalSum]);
   
    
       
  
    const handleGetData=()=>{
       fetch("http://localhost:8080/cart",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        dispatch(allProducts(res))
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    const handleDeleteData=(id)=>{
      fetch(`http://localhost:8080/cart/delete/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        dispatch(removeDataFromCart())
        handleGetData()
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    const handleAddQuantity=(id,num)=>{
      
      fetch(`http://localhost:8080/cart/update/${id}`,{
        method:"PATCH",
        body:JSON.stringify({quantity:num+1}),
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }

      })
      .then((res)=>res.json())
      .then((res)=>{
         dispatch(increaseCartQuantity())
         handleGetData()

      })
      .catch((err)=>{
        console.log(err)
      })

    }
      
    const handleSubQuantity=(id,num)=>{
      
      fetch(`http://localhost:8080/cart/update/${id}`,{
        method:"PATCH",
        body:JSON.stringify({quantity:num-1}),
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }

      })
      .then((res)=>res.json())
      .then((res)=>{
         dispatch(decreaseCartQuantity())
         handleGetData()

      })
      .catch((err)=>{
        console.log(err)
      })

    }

    const handleAddOrder=()=>{
      fetch("http://localhost:8080/order/add",{
        method:"POST",
        body:JSON.stringify(cartData),
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })

      fetch(`http://localhost:8080/cart/deleteallcart`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        dispatch(deleteAllFromCart())
        handleGetData()
      })
      .catch((err)=>{
        console.log(err)
      })

      
    }

    
      
    return(
        <div style={{marginTop:"40px"}}>
<TableContainer p="20px">
                <Table variant={"simple"}>
                  <Thead>
                    <Tr>
                    <Th>Item </Th>
                      <Th>Item Details</Th>
                      <Th>Price</Th>
                      <Th>Quantity</Th>
                      <Th>
                        <Box w="400px">
                          <span style={{ width: "10px" }}>
                            Delivery With Charges{" "}
                          </span>
                          <Input
                            placeholder="Enter Pincode"
                            w="120px"
                            required
                          />{" "}
                          <Button onClick={() => setShow(true)}>Check</Button>
                        </Box>
                      </Th>
                      <Th> Total ({cartData&&cartData.length} )Items</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cartData&&cartData?.map((item) => {
                      return (
                        <>
                          <Tr key={item._id}>
                            <Td>
                                <img src={item.image}/ >
                            </Td>
                            <Td w="10px">{item.title.substring(0, 30)}...</Td>
                            <Td>{item.price}</Td>
                            <Td fontSize={"20px"}>
                              <button
                                className="add-reduce-btn"
                               
                                onClick={() =>handleSubQuantity(item._id,item.quantity)}
                                // onClick={handleupdate(item._id,item.quantity)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                className="add-reduce-btn"
                                // onClick={() =>
                                //   handleQuant(
                                //     item._id,
                                //     1
                                //   )
                                // }
                                onClick={()=>handleAddQuantity(item._id,item.quantity)}

                              >
                                +
                              </button>
                            </Td>
                            <Td>
                              {show ? (
                                <span
                                  style={{ fontSize: "20px", color: "green" }}
                                >
                                  Available
                                </span>
                              ) : (
                                "Enter Pincode To Check"
                              )}
                            </Td>
                            <Td>{item.price * item.quantity}</Td>
                          </Tr>
                          <Button
                            m="10px"
                            color="red"
                            variant={"outline"}
                            // onClick={() => removeitem(item._id)}
                            // onClick={ () => dispatch(removeDataFromCart(item._id)) }
                            onClick={()=>handleDeleteData(item._id)} 
                          >
                            Remove Item
                          </Button>
                        </>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>

              <div>
                <SimpleGrid
                columns={[1, 2, 3]}
                gap="10px"
                textAlign={"center"}
                bg="blackAlpha.800"
                color="whiteAlpha.800"
                p="20px"
                w="100%"
              >
                <Box textAlign={"left"} m="10px">
                  <p>Delivery and payment options can be selected later</p>
                  <br />
                  <br />
                  <Flex alignItems={"center"}>
                    <BsShieldFillCheck />{" "}
                    <span style={{ margin: "0px 5px" }}>
                      Safe and Secure Payments
                    </span>
                  </Flex>
                  <Flex>
                    <MdOutlinePayments />{" "}
                    <span style={{ margin: "0px 5px" }}>
                      100% Payment Protection, Easy Returns
                    </span>
                    Policy
                  </Flex>
                </Box>
                <Box textAlign={"left"} m="10px">
                  <p>SubTotal : Rs. {TotalSum}</p>
                  <p>
                    Delivery Charges :{" "}
                    <span style={{ color: "red", fontWeight: "500" }}>
                      Free
                    </span>
                  </p>
                </Box>
                <Box textAlign={"left"} m="20px">
                  <Link to={"/checkout"}>
                    <Button  fontSize={"20px"} p="30px 50px" colorScheme={"red"} onClick={handleAddOrder}>
                      PROCEED TO PAY Rs. {TotalSum}
                    </Button>
                  </Link>
                </Box>
              </SimpleGrid>
              </div>

              </div>
    )
 }


 export default Cart
























 //   const removeitem=async(id)=>{
      //     let res = await fetch(`http://localhost:8080/cart/delete/${id}`,{
      //       method:"DELETE",
      //     headers:{
      //         "Authorization":`${localStorage.getItem("token")}`
      //       }
      //   })

      //   res = await res.json()
      //   getData()
      // }


   
    
      // const HandleQuantityChange = async(id,quan,num) => {
      //   let x = quan+num
      //   let res = await fetch(`http://localhost:8080/cart/update/${id}`,{
      //     method:"PATCH",
      //     body:JSON.stringify({
      //       quantity:x
      //     }),
      //     headers:{
      //       "Authorization":`${localStorage.getItem("token")}`
      //     }
      //   })

      //   res = await res.json()


      //   const newData = CartData.filter((item) => {
      //     return item._id === id ? (item.quantity = item.quantity + num) : item;
      //   });
      //   setCartData(newData);
      //   console.log(res)

      //   //  getData()
        
      // };