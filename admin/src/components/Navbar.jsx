

import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";
import "../Styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";


import LOGO from "../Images/newLOGO.jpg"
import amazon_logo from "../Images/Amazon_logo.png" 





const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const navigate=useNavigate()
  
  const LogOut=()=>{
    localStorage.removeItem("token")
    navigate("/admin/login")
  }
  

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="fixed"
        w={"100vw"}
        width="100%"
        top="0"
        zIndex={1}
        // style={{overflowX:"auto"}}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          padding={"0px 15px"}
        >
          <Box className="logoBox">
         {/* <Link to="/admin/dashboard" >   */}
          <img
              className="logo"
             src={amazon_logo} 

            alt="logo"
            />
            {/* </Link>{" "} */}
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                display={{ sm: "none", base: "none", md: "block", lg: "block" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <div 
            
              >
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                    display={{
                      sm: "none",
                      base: "none",
                      md: "block",
                      lg: "block",
                    }}
                  >
                    <Flex>
                      <Avatar
                        size={"sm"}
                        textColor={"white"}
                        name={"Kallol Sarkar"}
                        bg={"red.600"}
                      />
                      <Flex
                        flexDirection={"column"}
                        textAlign={"left"}
                        marginLeft={"15px"}
                      >
                        <Text>Kallol Sarkar</Text>
                        <Text fontSize={"xs"} color={"red.600"}>
                          Admin
                        </Text>
                      </Flex>
                    </Flex>
                  </MenuButton>
                </Menu>
              </div>
            </Stack>
          </Flex>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color={"red.600"}>
            <Stack as={"nav"} spacing={4}>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/dashboard">Dashboard</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/products">Products</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/users">Users</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/orders">Oeders</Link>
              </Button>
              <Button onClick={onClose} variant={"outline"}>
                <Link to="/admin/feedback">Feedback</Link>
              </Button>
              <Flex>
                <Button
                  className="smlogout"
                  variant={"outline"}
                  ml={"16vw"}
                  onClick={() => LogOut()  }
                >
                  Logout
                </Button>
                <Button onClick={toggleColorMode} variant={"outline"}>
                  {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
