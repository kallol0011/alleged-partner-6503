import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Darayer = ({isOpen,onOpen,placement,onClose,setPlacement}) => {
  return <>
    
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen} zIndex={"2000"}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Hello Sign In</DrawerHeader>
            <DrawerBody>
            <Box
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
        </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer></>
}

export default Darayer