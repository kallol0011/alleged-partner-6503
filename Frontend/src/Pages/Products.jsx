import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Box mt={12} display={"flex"} background={"blackAlpha.100"}>
       
          <Box w={"15%"} pl={4}>
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
