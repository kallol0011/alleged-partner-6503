import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Box m={10}  gap={"10px"} display={"flex"}>
       
          <Box w={"18%"} backgroundColor={"#232f3d"} color={"white"} marginLeft={-10} paddingLeft={5}>
            <Sidebar />
          </Box>
          <Box width={"100%"}paddingLeft={10}>
            <ProductList/>
          </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default Products;
