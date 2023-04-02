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
    const [categoty, setcategoty] = useState("");     //  product[0].category
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
    const data = {  price : +(price),categoty, discount, image, title };
    
    
    console.log(data);
    // const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDI4MjFjZDY0OWVmOTdkMTJjOGVkZDQiLCJpYXQiOjE2ODAzNTE3MDZ9.VS0sgezYpPOGXtsf6XelmO1hZB4EWQUKV9YTnhURiCs"
    // localStorage.setItem("Authorization",JSON.stringify(token))
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
        duration: 9000,
        isClosable: true,
        position:"top"
      })
      
      navigate("/admin/products")
      
    })







  };

  

  

  return (
    <Flex marginTop="60px" className="mainbox" >
      <Box>
        <Sidebar />
      </Box>
      <Box width={"80%"} padding="25px" margin="auto">
        <Text className="head">UPDATE PRODUCT</Text>
        <form style={{ width: "80%", margin: "auto" }} onSubmit={handleSubmit}>
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

          <FormLabel className="label">Cetagoty</FormLabel>
          <Select
            placeholder={"Select cetagoty"}
            onChange={(e) => {
              setcategoty(e.target.value);
            }}
          >
            {elments.map((el) => {
              return <option>{el}</option>;
            })}
          </Select>
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
          <Input type="submit" bg="green.600" color="white" margin="20px 0px" />
        </form>
      </Box>
    </Flex>
  );
};

export default UpdateData;