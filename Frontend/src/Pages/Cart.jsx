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
 
 const Cart=()=>{
    // const mynav = useNavigate();
  
    // const [CartData, setCartData] = useState([]);

    const CartData=[
        {
            img: "https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg",
            price: 66,
            DealOfDay: "Deal of the Day",
            desc: "Best Prices on boAt Headphones, Soundbars and Speakers",
            id:1,
            quantity:1
          },
          {
            img: "https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg",
            price: 80,
            DealOfDay: "Deal of the Day",
            desc: "Jaw dropping deals on headsets",
            id:2,
            quantity:1
          },
      
          {
            img: "https://m.media-amazon.com/images/I/31EXkIBVKUL._AC_SY200_.jpg",
            price: 50,
            DealOfDay: "Deal of the Day",
            desc: "adidas & campus Footwear",
            id:3,
            quantity:1
          }
    ]
  
    
    const [show, setShow] = useState(false);
    const [TotalSum, setTotalSum] = useState(0);


    // const HandleDelete = (id) => {
    //     axios.delete(`https://alok-verma-rct.onrender.com/crankdealCart/${id}`);
    //     let NewData = CartData.filter((item) => item.id !== id);
    //     setCartData(NewData);
    //   };
    
      const HandleQuantityChange = (id, quan, num) => {
        // axios({
        //   method: "patch",
        //   url: `https://alok-verma-rct.onrender.com/crankdealCart/${id}`,
        //   data: {
        //     quantity: quan + num,
        //   },
        // }).catch((error) => console.log(error));
    
        const newData = CartData.filter((item) => {
          return item.id === id ? (item.quantity = item.quantity + num) : item;
        });
        // setCartData(newData);
        CartData=newData
        TotalPrice();
      };
    
      const TotalPrice = () => {
        let sum = 0;
        CartData.forEach((item) => (sum += item.price * item.quantity));
        setTotalSum(sum);
      };
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
                      <Th> Total ({CartData.length} )Items</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {CartData?.map((item) => {
                      return (
                        <>
                          <Tr key={item.id}>
                            <Td>
                                <img src={item.img}/ >
                            </Td>
                            <Td w="40px">{item.DealOfDay}</Td>
                            <Td>{item.price}</Td>
                            <Td fontSize={"20px"}>
                              <button
                                className="add-reduce-btn"
                                onClick={() =>
                                  HandleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    -1
                                  )
                                }
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              {item.quantity}
                              <button
                                className="add-reduce-btn"
                                onClick={() =>
                                  HandleQuantityChange(
                                    item.id,
                                    item.quantity,
                                    1
                                  )
                                }
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
                            // onClick={() => HandleDelete(item.id)}
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