import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Box m={10} display={"flex"}>
       
          <Box w={"15%"} >
            <Sidebar />
          </Box>
          <Box width={"100%"}>
            <ProductList/>
          </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Products;
