import React, { FormEvent, useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";


// const getData=(id)=>{
//     return fetch(`http://localhost:8080/admin/${id}`,{
//       method:"GET",
//       headers:{
//         "Content-Type":"application/json",
//         "Authorization":localStorage.getItem("token")
//       }
//     })
//     .then((res)=>res.json())
// }

// /update/:productID
const UpdateData = () => {
    const [product,setproduct]=useState([]) 
    const [title, settitle] = useState("");     //  product[0].title
    const [image, setImage] = useState("");     //  product[0].image
    const [price, SetPrice] = useState("");     //  product[0].price
    const [category, setCategory] = useState("");     //  product[0].category
    const [discount, setdiscount] = useState("");     //  product[0].discount


  const toast = useToast()

  const params=useParams()
  const id=params.id
  console.log(id)


  const navigate=useNavigate()


   useEffect(()=>{
    //  getData(id).then((res)=>{
    //     setproduct(res)
        
    //  })
   },[])

   console.log("product",product)




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



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {  price : +(price),category, discount, image, title };
    
    
    console.log(data);
    
    fetch(`http://localhost:8080/admin/update/${id}`,{
      
      method:"PATCH",
      headers:{
          "Content-Type":"application/json",
          "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(data)
    }).then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position:"top"
      })
      
      navigate("/admin/products")
      
    })


  };

  

  

  return (
    <Flex marginTop="60px" className="mainbox"  >
      <Box>
        <Sidebar />
      </Box>
        <Box width={{sm:"90%",lg:"80%"}}  margin="auto" padding={{lg:"25px",sm:"0px"}} >
        <Text className="head">UPDATE PRODUCT</Text>
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
                      // bg={"green.100"}
                      
                      // pl={"90%"}
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
         
           <Button bg="green.600" color="white" margin="20px 0px" width={"100%"} onClick={handleSubmit} > Submit </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default UpdateData;