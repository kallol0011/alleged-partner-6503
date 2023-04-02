import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

import {
  Box,
  Button,
  Flex,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function Orderpage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    hadleGetOrderData();
  }, []);

  const hadleGetOrderData = () => {
    fetch("https://strange-crown-worm.cyclic.app/order", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = () => {};

  console.log(data);

  return (
    <div style={{ margin: "auto" }}>
      <br />
      <br />
      <br />
      <Heading textAlign={"center"}>My Order</Heading>
      <br />

      {/* /////////////////////////////////////// */}

      <Box
        margin="auto"
        width={{ base: "80vw", lg: "80vw", sm: "95vw" }}
        marginTop="18px"
        // marginLeft={"14%"}
      >
        <Table variant="simple" width="100%">
          <Thead>
            <Tr w={"7vh"}>
              <Th w={"7vw"}>Image</Th>
              <Th width="42vw">title</Th>
              <Th>Price</Th>
              <Th>Quantity</Th>
              <Th width={"12vw"}>Date</Th>
              <Th width={"8vw"}>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((el) => {
              return (
                <Tr key={el._id}>
                  <Th>
                    {" "}
                    <Image width={"254px"} src={el.image} alt={el.title} />{" "}
                  </Th>
                  <Th> {el.title} </Th>
                  <Th>₹{el.price}</Th>
                  <Th>{el.quantity}</Th>
                  <Th>{el.date}</Th>
                  <Th>{el.time}</Th>
                  <Th></Th>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>

      <br />
      <Footer />
    </div>
  );
}
