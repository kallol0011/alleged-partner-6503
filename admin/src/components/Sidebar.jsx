import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoCarSportSharp } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { CiMemoPad } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { MdFeedback } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

import "../Styles/Sidebar.css"
import { BsBoxFill } from "react-icons/bs";

const Sidebar = () => {
    
  const navigate=useNavigate()
  
  const LogOut=()=>{
    localStorage.removeItem("token")
    navigate("/admin/login")
  }
    return (
      <>
        
          <Box
            className="sidebar"
            display={{ sm: "none", md: "block", lg: "block", base: "none" }}
            color="green.600"
            
            
          >
            <Link to="/admin/dashboard">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <HiOutlineChartSquareBar className="icon" />
                  &nbsp;&nbsp;
                  <Text>Dashboard</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/admin/products">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <BsBoxFill className="icon" />
                  &nbsp;&nbsp;
                  <Text>Products</Text>
                </Flex>
              </Button>
            </Link>
  
            <Link to="/admin/users">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <FiUsers className="icon" />
                  &nbsp;&nbsp;
                  <Text>Users</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/admin/orders">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <CiMemoPad className="icon" />
                  &nbsp;&nbsp;
                  <Text>Orders</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/admin/feedback">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <MdFeedback className="icon" />
                  &nbsp;&nbsp;
                  <Text>Feedback</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/admin/profile">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <CgProfile className="icon" />
                  &nbsp;&nbsp;
                  <Text>Profile</Text>
                </Flex>
              </Button>
            </Link>
            <Button
              className="link"
              marginTop={"30px"}
              variant={"outline"}
              onClick={() => LogOut()}
            >
              <Flex width={"150px"}>
                <FiLogOut />
                &nbsp;&nbsp;
                <Text>Logout</Text>
              </Flex>
            </Button>
          </Box>


        {/* )} */}


      </>
    );
  };
  
  export default Sidebar;
  