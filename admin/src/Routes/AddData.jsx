import React, { FormEvent } from "react";
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
} from "@chakra-ui/react";
// import Sidebar from "../Components/Sidebar";

// import { carState } from "../Redux/Cars/cars.reducer";
// import { addCarDone, addCars } from "../Redux/Cars/cars.actions";
// import { AppDispatch, RootState } from "../Redux/Store";
// import { useAppDispatch } from "../Redux/app.hooks";
import Sidebar from "../components/Sidebar";

const AddProduct = () => {
  const [title, settitle] = React.useState("");
  const [image, setImage] = React.useState("");
  const [price, SetPrice] = React.useState("");
  const [categoty, setcategoty] = React.useState("");
  const [discount, setdiscount] = React.useState("");

//   const dispatch = useAppDispatch();
//   const state = useSelector((state ) => state.CarManager);
//   const { add_success, add_error } = state;

const elments = [
    "watch",
    "mobile",
    "kitchen",
    "bag",
    "earphone",
    "laptop",
    "mens",
    "womens",
    "cameras",
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
      categoty: "product" 
      
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { ...newProduct, price : +price,categoty, discount: discount, image, title };
    // dispatch(addCars(data));
    
    console.log(data);

    const headers = {
      'Content-Type': 'application/json'
    };
    const url=`http://localhost:8080/products`
    const options = {
      method: 'POST',
      url: url,
      headers: headers,
      data: JSON.stringify()
    };

    axios(options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
    


  };

  // const toast = useToast({
  //   title: `Car added successfully`,
  //   status: "success",
  //   isClosable: true,
  //   position: "top",
  // });

  // const Error = useToast({
  //   title: `There was error processing your request`,
  //   status: "error",
  //   isClosable: true,
  //   position: "top",
  // });

//   if (add_success) {
//     toast();
//     dispatch(addCarDone());
//   }
//   if (add_error) {
//     Error();
//     dispatch(addCarDone());
//   }

  return (
    <Flex marginTop="60px" className="mainbox" >
      <Box>
        <Sidebar />
      </Box>
      <Box width={"80%"} padding="25px" margin="auto">
        <Text className="head">ADD A NEW PRODUCT</Text>
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

export default AddProduct;