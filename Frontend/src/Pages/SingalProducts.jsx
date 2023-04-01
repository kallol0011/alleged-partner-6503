import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Badge,
    Icon,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
  import { MdLocalShipping } from "react-icons/md";
  import { useParams,useNavigate } from "react-router-dom";
  import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
  import { useDispatch } from "react-redux";
import axios from "axios";
import Footer from "../components/Footer";

  export default function SingalProducts() {
    const param = useParams();
    const [prod, setProd] = useState({});

    const navigate=useNavigate()
   
    useEffect(()=>{
       fetchData(); 
    //    token kaha hai 
    },[])
    const fetchData=()=>{
        axios.get(`http://localhost:8080/product/singleproduct/${param.id}`).then((res)=>{
           setProd(res.data)
           }).catch((err)=>{
          console.log("error")
       })
    }

    const addToCart=(id)=>{
      // axios.post(`http://localhost:8080/cart/add/${id}`)
      // .then((res)=>{
      //   navigate("/cart")
      //   console.log(res)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
      fetch(`http://localhost:8080/cart/add/${id}`,{
        method:"POST",
        body:JSON.stringify(prod),
        headers:{
          "Content-Type":"application/json",
          "Authorization":`${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        navigate("/cart")
      })
      .catch((err)=>{
        console.log(err)
      })

    }
    
    return <><Container maxW={"7xl"} mt={"20"} background={"blackAlpha.200"}>
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
      <Flex>
        <Image
          rounded={"md"}
          alt={"product image"}
          src={prod?.image}
          fit={"contain"}
          align={"center"}
          w={"100%"}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={"header"}>
          <Heading  pt={"5"}
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
          >
            {prod?.title}
          </Heading>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={300}
            fontSize={"2xl"}
          >
            ${prod?.price}.00 USD
          </Text>
        </Box>
        <Flex gap={1}>
          {prod?.rating &&
            Array(5)
              .fill("")
              .map((el, i) => {
                if (i + 1 < Math.floor(prod.rating)) {
                  return (
                    <Icon
                      key={Math.random() * 100 + 13}
                      as={BsStarFill}
                      color={"yellow.500"}
                    />
                  );
                } else if (i + 1 == Math.floor(prod.rating)) {
                  return (
                    <Icon
                      key={Math.random() * 100 + 13}
                      as={BsStarHalf}
                      color={"yellow.500"}
                    />
                  );
                } else {
                  return (
                    <Icon
                      key={Math.random() * 100 + 13}
                      as={BsStar}
                      color={"yellow.500"}
                    />
                  );
                }
              })}
        </Flex>
        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text fontSize={"lg"}>{prod?.description}</Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Features
            </Text>

            <Flex spacing={2}>
              {prod?.offer && (
                <List spacing={2}>
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    Offer {prod?.offer}
                  </Badge>
                </List>
              )}
              {prod?.discount && (
                <List spacing={2}>
                  <Badge ml="1" fontSize="0.8em" colorScheme="green">
                    Discount {prod?.discount}
                  </Badge>
                </List>
              )}
              {prod?.tags?.length > 0 &&
                prod.tags.map((el) => {
                  return (
                    <List spacing={2} key={Math.random() * 100 + 12}>
                      <Badge ml="1" fontSize="0.8em" colorScheme="green">
                        {el.label}
                      </Badge>
                    </List>
                  );
                })}
            </Flex>
          </Box>
          <Box>
            <Text
              fontSize={{ base: "16px", lg: "18px" }}
              color={useColorModeValue("yellow.500", "yellow.300")}
              fontWeight={"500"}
              textTransform={"uppercase"}
              mb={"4"}
            >
              Product Details
            </Text>

            <List spacing={2}>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  discount :
                </Text>{" "}
                {prod?.discount}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Category :
                </Text>{" "}
                {prod?.category}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  offer :
                </Text>{" "}
                {prod?.offer}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                delivery :
                </Text>{" "}
                {prod?.delivery}
              </ListItem>
            </List>
          </Box>
        </Stack>

        <Button
          rounded={"none"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={"#D04D48"}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          onClick={()=>addToCart(prod._id)}
        >
          Add to cart
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>
  <Footer/></>
  }