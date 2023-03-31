import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
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
    // const dispatch = useDispatch();
    // const state = useSelector => state.AuthManager);
    // const state=false
    // const { isAuth } = state;
    return (
      <>
        {/* {!isAuth ? (
          <Navigate to="/login" />
         ) : ( */}
          <Box
            className="sidebar"
            display={{ sm: "none", md: "block", lg: "block", base: "none" }}
            color="green.600"
            
            
          >
            <Link to="/dashboard">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <HiOutlineChartSquareBar className="icon" />
                  &nbsp;&nbsp;
                  <Text>Dashboard</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/products">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <BsBoxFill className="icon" />
                  &nbsp;&nbsp;
                  <Text>Products</Text>
                </Flex>
              </Button>
            </Link>
  
            <Link to="/users">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <FiUsers className="icon" />
                  &nbsp;&nbsp;
                  <Text>Users</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/orders">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <CiMemoPad className="icon" />
                  &nbsp;&nbsp;
                  <Text>Orders</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/feedback">
              <Button className="link" variant={"outline"}>
                <Flex width={"150px"}>
                  <MdFeedback className="icon" />
                  &nbsp;&nbsp;
                  <Text>Feedback</Text>
                </Flex>
              </Button>
            </Link>
            <Link to="/profile">
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
            //   onClick={() => dispatch(auth_logout())}
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
  