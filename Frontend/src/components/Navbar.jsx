import { Box, Text } from "@chakra-ui/react";
import React from "react";
const Navbar = () => {
  return (
    <>
      <Box className="header" >
        <Box className="container container-header">
          <Box className="logo-container border-white">
            <Box className="logo"></Box>
            <span className="dotin">.in</span>
          </Box>

          <Box className="address-container border-white">
            <Text className="hello">Hello</Text>
            <Box className="icon-address">
              <i className="fa-solid fa-location-dot icon-location"></i>
              <Text>Select your address</Text>
            </Box>
          </Box>

          <Box className="search-container">
            <select className="search-select">
              <option>All</option>
            </select>
            <input type="text" className="search-input" />
            <Box className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Box>
          </Box>

          <Box className="language-container border-white">
            <Text>English</Text>
            <Box className="lauguge-image">
              <img src="https://media.istockphoto.com/vectors/vector-flag-of-the-republic-of-india-proportion-23-the-national-flag-vector-id1051236720?k=20&m=1051236720&s=612x612&w=0&h=ATObRTHmTosADa9zaB2dQPn_VAQmG1XYH2x92kzc304=" />
            </Box>
          </Box>

          <Box className="login-container border-white">
            <Text>
              Hello,<span>sign in</span>
            </Text>
            <Text className="account">Account & Lists</Text>
          </Box>

          <Box className="return-order-container">
            <Text>
              Returns
              <Box className="order">& Orders</Box>
            </Text>
          </Box>

          <Box className="cart-container border-white">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </Box>
        </Box>

       <Box pos={"relative"} zIndex='1500'>
       <nav className="nav" >
          <Box className="container container-nav">
            <ul>
              <li className="border-white" id="open-nav-sidebar">
                <span className="open-nav-slider">
                  <i className="fa-solid fa-bars"></i>
                  All
                </span>
              </li>
              <li className="border-white">
                <a href="#">Best Sellers</a>
              </li>
              <li className="border-white">
                <a href="#">Today's Deals</a>
              </li>
              <li className="border-white">
                <a href="#">Mobiles</a>
              </li>
              <li className="border-white">
                <a href="#">Customer Service</a>
              </li>
              <li className="border-white">
                <a href="#">Electronic</a>
              </li>
              <li className="border-white">
                <a href="#">Home & Kitchen</a>
              </li>
              <li className="border-white">
                <a href="#">Fashion</a>
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
        {/* <Box
          className="sidebar-container-navigation"
          id="sidebar-container-navigation-id"
        >
          <Box className="sidebar-left-part">
            <Box className="sidebar-top">
              <i className="fa-solid fa-circle-user"></i>
              <h2>
                Hello, <span>sign in</span>
              </h2>
            </Box>
            <Box className="sidebar-wrap">
              <Box className="sidebar-item">
                <h2>Trending</h2>
                <Text>Best Sellers</Text>
                <Text>New Releases</Text>
                <Text>Movers and Shakers</Text>
              </Box>
              <Box className="sidebar-item">
                <h2>Digital Content And Devices</h2>
                <Text>Echo & Alexa</Text>
                <Text>Fire TV</Text>
                <Text>Kindle E-Readers & eBooks</Text>
                <Text>Audible Audiobooks</Text>
                <Text>Amazon Prime Video</Text>
                <Text>Amazon Prime Music</Text>
              </Box>
              <Box className="sidebar-item">
                <h2>Shop By Category</h2>
                <Text>Mobiles, Computes</Text>
                <Text>TV, Appliances, Electronic</Text>
                <Text>Men's Fashion</Text>
                <Text>Women's Fashion</Text>
                <Text>See All</Text>
              </Box>
              <Box className="sidebar-item">
                <h2>Programs & Features</h2>
                <Text>Gift Cards & Mobile Recharges</Text>
                <Text>Flight Tickets</Text>
                <Text>#Foundlt-OnAmazon</Text>
                <Text>Clearance store</Text>
              </Box>
              <Box className="sidebar-item">
                <h2>Help & Settings</h2>
                <Text>Your Account</Text>
                <Text>Customer Service</Text>
                <Text>Sign in</Text>
              </Box>
            </Box>
          </Box>
          <button id="sidebar-navigation-close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </Box> */}
      </Box>
    </>
  );
};

export default Navbar;
