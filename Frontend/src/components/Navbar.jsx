import { Box, Text,Icon } from "@chakra-ui/react";
import {FaShoppingCart} from "react-icons/fa"

import { Link,useNavigate,useLocation } from "react-router-dom";
import Logout from "./Logout";
import React, { useEffect, useState } from "react";
import Dra from "./Dra";
import axios from "axios";
import ProductCard from "./ProductCard";

const Navbar = () => {
  //const [token,setToken]=useState(localStorage.getItem("token") || "")
  const [search,setsearch]=useState("")
  const [data,setdata]=useState([])
 
  const [token,setToken]=useState(false)
  const [category,setCategory]=useState("product")

  const navigate=useNavigate()
  const location=useLocation()
  
  
  const SearchData=(e)=>{
    setsearch(e.target.value)
    }
    useEffect(()=>{
      fetchData(search)
    },[search])
   const fetchData=async(data)=>{
        axios.get(`https://strange-crown-worm.cyclic.app/product/filter?q=${data}`).then((res)=>{
          console.log("hkjhdkahkdhkahdkashk",res.data)
          setdata(res.data)
        }).catch((err)=>{
          console.log(err)
        })
      }
  useEffect(()=>{
    let tokenData=localStorage.getItem("token") || ""
    if(tokenData){
      setToken(true)
    }

  },[category])

  useEffect(()=>{

  },[token])

  const categoryProduct=()=>{
    setCategory("product")
    navigate("/product")
  }
  const categoryCream=()=>{
    setCategory("cream")
    navigate("/product")
  }
  const categoryMobile=()=>{
    setCategory("mobile")
    navigate("/product")
  }
  const categoryClothes=()=>{
    setCategory("clothes")
    navigate("/product")
  }
  const categoryKitchen=()=>{
    setCategory("product")
    navigate("/product")
  }
  const categoryLaptop=()=>{
    setCategory("laptop")
    navigate("/product")
  }
  return (
    <>
      <Box className="header" >
        <Box className="container container-header">
         <Link to="/">
          <Box className="logo-container border-white">
            <Box className="logo"></Box>
            <span className="dotin">.in</span>
          </Box>
          </Link>

          <Box className="address-container border-white">
            <Text className="hello">Hello</Text>
            <Box className="icon-address">
              <i className="fa-solid fa-location-dot icon-location"></i>
              <Text>Select your address</Text>
            </Box>
          </Box>

           <Box pos='relative'>
          <Box className="search-container" >
           <select className="search-select">
              <option>All</option>
            </select>
            <input onChange={SearchData} type="text" value={search} className="search-input" />
            <Box className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Box>
           </Box>
         {search!==""&&data.length>0?<> <Box   >
             <Box overflow={'scroll'} maxH={'30rem'} zIndex={'100000'} bg='white' pos='absolute' color='black' p='2' pt={"10"}>
            {
              data?.map((el)=>{
                return <ProductCard {...el}/>
              })
            }
           </Box></Box></>:""}
          </Box>

          <Box className="language-container border-white">
            <Text>English</Text>
            <Box className="lauguge-image">
              <img src="https://media.istockphoto.com/vectors/vector-flag-of-the-republic-of-india-proportion-23-the-national-flag-vector-id1051236720?k=20&m=1051236720&s=612x612&w=0&h=ATObRTHmTosADa9zaB2dQPn_VAQmG1XYH2x92kzc304=" />
            </Box>
          </Box>

          {/* <Link to="/signup"><Box className="login-container border-white">
            <Text>
              Hello,<span>sign in</span>
            </Text>
            <Text className="account">Account & Lists</Text>
          </Box></Link> */}
          {token? <Logout/>:
          <Link to="/signup"><Box className="login-container border-white">
          <Text>
            Hello,<span>sign in</span>
          </Text>
          <Text className="account">Account & Lists</Text>
        </Box></Link>
          }

          <Box className="return-order-container">
            <Text>
              Returns
              <Box className="order">& Orders</Box>
            </Text>
          </Box>

          <Box className="cart-container border-white">
            {/* <i className="fa-solid fa-cart-shopping"><FaShoppingCart/></i> */}
            <Icon fontSize={"4xl"} as={FaShoppingCart}/>
            Cart
          </Box>

          <Box>
            <a href="https://admin-eight-ecru.vercel.app/">Admin</a>
          </Box>
        </Box>

      
       
{/* /////////////////////////////////////////////////////////////////////////////// */}
       <Box pos={"relative"} zIndex='1200'>
       <nav className="nav" >
          <Box className="container container-nav" alignItems={"center"}>
            <ul>
              <li className="border-white" id="open-nav-sidebar">
                <span className="open-nav-slider">
                  <Dra/>
                </span>
              </li>
              <li className="border-white">
                <Box onClick={categoryProduct}>Best Sellers</Box>
              </li>
              <li className="border-white">
                <Box onClick={categoryCream}>Today's Deals</Box>
              </li>
             <Link to="/product">
             <li className="border-white">
                <Box onClick={categoryMobile}>Mobiles</Box>
              </li>
             </Link>
              <li className="border-white">
                <a href="#">Customer Service</a>
              </li>
              <li className="border-white">
                <Box onClick={categoryLaptop}>Electronic</Box>
              </li>
              <li className="border-white">
                <Box onClick={categoryKitchen}>Home & Kitchen</Box>
              </li>
              <li className="border-white">
                <Box onClick={categoryClothes}>Fashion</Box>
              </li>
              <li className="border-white">
                <a href="#">Book</a>
              </li>
              <li className="border-white prime-image-hover">
                <a href="#">Prime</a>
                <Box className="prime-image">
                  <img src="https://m.media-amazon.com/images/G/31/prime/NavFlyout/TryPrime/2018/Apr/IN-Prime-PIN-TryPrime-MultiBen-Apr18-400x400._CB442254244_.jpg" />
                </Box>
              </li>
            </ul>
            <Box className="nav-right-image-amazon-prime">
              <img src="https://m.media-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Desktop/Watch-Entertainment-for-FREE_400-x39._CB605460886_.jpg" />
            </Box>
          </Box>
        </nav>
       </Box>
        {/* <!--sidebar navigation--> */}
        </Box>
    </>
  );
};

export default Navbar;
