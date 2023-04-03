import React, { FormEvent } from "react";
import {useState}from "react"
// import { useDispatch, useSelector } from "react-redux";
import "../Styles/AddData.css"
import axios from "axios"
import {
  FormLabel,
  Input,
  Select,

  useToast,
  Flex,
  Box,
  Text,
  Popover,
  PopoverArrow,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverContent,
  Button,
  Image,
  FormControl,
} from "@chakra-ui/react";

import Sidebar from "../components/Sidebar";

const AddProduct = () => {
  const [title, settitle] = useState("");
  const [image, setImage] = useState("");
  const [price, SetPrice] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setdiscount] = useState("");


  const toast = useToast()


const elments = [
  "watch",
  "mobile",
  "kitchen",
  "priduct",
  "cream",
  "laptop",
  "clothes",
  "shoe",
  "jewellery",
];

  const newProduct = {
    image: "https://m.media-amazon.com/images/I/61hVGtfIXGL._AC_UL320_.jpg",
      title: "boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3\" Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Lightning Black)",
      rating: 4,
      view: "(28,613)",
      price: 1199,
      maxprice: 6990,
      discount: "83% ",
      delivery: "FREE Delivery by Amazon",
      offer: "",
      category: "product" 
      
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...newProduct, price : price,category, discount: discount, image, title };
    
    
    console.log(data);
    
    fetch(`https://strange-crown-worm.cyclic.app/admin/add`,{   ///page/${page}?category=${catagory}
      
      method:"POST",
      headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      toast({
        title: ' Product Added ',
        description: "Peoduct has been added in database successfully",
        status: 'success',
        duration: 2000,
        isClosable: true,
        position:"top"
      })
      
      
    })


  };

  

  

  return (
    <Flex marginTop="60px" className="mainbox" >
      <Box>
        <Sidebar />
      </Box>
      <Box width={{sm:"90%",lg:"80%"}}  margin="auto" padding={{lg:"25px",sm:"0px"}} >
        <Text className="head">ADD A NEW PRODUCT</Text>
        
        

        <FormControl  width={{base:"80%",lg:"80%",sm:"95%"}}  margin= "auto"  >
          <FormLabel className="label">Title </FormLabel>
          <Input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />

          <FormLabel className="label"> Discount </FormLabel>
          <Input
            value={discount}
            onChange={(e) => {
              setdiscount(e.target.value);
            }}
          />

          {/* <FormLabel className="label">Cetagoty</FormLabel> */}
          <Select
                      placeholder="CAREGORY"
                      variant="flushed"
                      value={category}
                      onChange={(e) => {
                        
                        setCategory(e.target.value)
                      }}
                      fontSize="12px"
                      fontWeight="bold"
                      width="100px"
                    >
                       
                        <option style={{fontSize:"15px"}} value="watch" > &nbsp; &nbsp; watch </option>;
                        <option style={{fontSize:"15px"}} value="mobile" > &nbsp; &nbsp; mobile </option>;
                        <option style={{fontSize:"15px"}} value="laptop" > &nbsp; &nbsp; laptop </option>;
                        <option style={{fontSize:"15px"}} value="product" > &nbsp; &nbsp; product </option>;
                        <option style={{fontSize:"15px"}} value="cream" > &nbsp; &nbsp; cream </option>;
                        <option style={{fontSize:"15px"}} value="cream" > &nbsp; &nbsp; cream </option>;
                        <option style={{fontSize:"15px"}} value="clothes" > &nbsp; &nbsp; clothes </option>;
                        <option style={{fontSize:"15px"}} value="kitchen" > &nbsp; &nbsp; kitchen </option>;
                        <option style={{fontSize:"15px"}} value="shoes" > &nbsp; &nbsp; shoes </option>;
                        <option style={{fontSize:"15px"}} value="shoes" > &nbsp; &nbsp; shoes </option>;
                        <option style={{fontSize:"15px"}} value="jewellery" > &nbsp; &nbsp; jewellery </option>;
                      
                    </Select>
                    <Input value={category} />

          <FormLabel className="label">price</FormLabel>
          <Input
            value={price}
            onChange={(e) => {
              SetPrice(e.target.value);
            }}
          />
          <FormLabel className="label">Image URL</FormLabel>
          <Flex>
            {" "}
            <Input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
            <Popover>
              <PopoverTrigger>
                <Button width="200px" marginLeft={"10px"} bg={"green.600"}>
                  Image Preview
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton color="black" />
                <Image
                borderRadius={"18px"}
                  src={
                    image ||
                    "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                  }
                  alt="product"
                />
              </PopoverContent>
            </Popover>
          </Flex>
          {/* <Input type="submit" bg="green.600" color="white" margin="20px 0px" /> */}
          <Button bg="green.600" color="white" margin="20px 0px" w={"100%"} onClick={handleSubmit} >
            <Text fontSize={"21px"} >Submit</Text>
          </Button>
        </FormControl>


      </Box>
    </Flex>
  );
};

export default AddProduct;