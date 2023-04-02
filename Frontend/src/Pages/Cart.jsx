//   import "./Css/Cart.css";
  import "./Cart.css"
 import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuGroup,
    MenuDivider,
    IconButton,
    Flex,
    Text,
    Input,
    Show,
    Image,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
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
 import axios from "axios"
 import { BsCart2, BsFillPersonFill, BsShieldFillCheck } from "react-icons/bs";
 import { MdOutlinePayments } from "react-icons/md";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../Redux/CartReducer/action";
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCartQuantity, deleteAllFromCart, increaseCartQuantity, removeDataFromCart } from "../Redux/CartReducer/action"

 const Cart=()=>{
    
   const dispatch = useDispatch();
   
   const [CartData, setCartData] = useState([]);
    
     const [show, setShow] = useState(false);
     const [TotalSum, setTotalSum] = useState(0);
     const cartData = useSelector(state => state.cartReducer.cartData);
    // const getData=async()=>{
    //   let res = await fetch(`http://localhost:8080/cart`,{
    //     method:"GET",
    //     headers:{
    //       "Authorization": `${localStorage.getItem("token")}`
    //     }
    //   })
    //   res = await res.json()
    //   console.log(res)
    //   setCartData(res)
    // }
    
    useEffect(() => {
      dispatch(fetchAllProducts());
      setCartData(cartData)
    }, []);
    
    // const TotalPrice = () => {
    // };
    useEffect(() => {
      let sum = 0;
      cartData.forEach((item) => (sum += item.price * item.quantity));
      setTotalSum(sum);
      // TotalPrice();
     
    }, [cartData,TotalSum]);
   
    // const handleQuant=(id,num)=>{
    // setQuantity(quantity+num)
    //   let payload = {quantity}
      
    //   fetch(`http://localhost:8080/cart/update/${id}`,{
    //       method:"PATCH",
    //       body:JSON.stringify(payload),
    //       headers:{
    //         "Content-Type":"application/json",
    //         "Authorization":`${localStorage.getItem("token")}`
    //       }
    //   })
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     getData()
    //     // setQuantity(1)
    //   })
    //   .catch((err)=>{
    //     console.log(err)
    //   })

    //   //  setQuantity(1)
    // }

       
  
    
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
    
      console.log(cartData)
      console.log(TotalSum)
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
                                // onClick={() =>
                                  
                                //   HandleQuantityChange(item._id,item.quantity,-1)
                                //   }
                                onClick={ () => dispatch(decreaseCartQuantity(item._id))}
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
                                onClick={ () => dispatch(increaseCartQuantity(item._id)) }
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
                            onClick={ () => dispatch(removeDataFromCart(item._id)) }
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
                    <Button  fontSize={"20px"} p="30px 50px" colorScheme={"red"}>
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