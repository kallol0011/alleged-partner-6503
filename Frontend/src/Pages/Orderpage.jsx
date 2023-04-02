import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../components/Footer";



export default function Orderpage() {
  //const [data,setData]=useState([])
  const data = [
    {
      _id: "642551f4936f9869d13df384",
      image: "https://m.media-amazon.com/images/I/61aZg6hxGcL._AC_UL320_.jpg",
      title:
        "Parker Vector Standard Calligraphy CT Fountain Pen (Black), 1 Count (P…",
      rating: 4.1,
      offer: "",
      price: 396,
      maxprice: 550,
      discount: "(28% off)",
      delivery: "FREE Delivery by Amazon",
      view: "(3,986)",
      category: "product",
      quantity: 1,
      time: "2:40:12 pm",
      date: "Thu Mar 30 2023",
    },
    {
        _id: "642551f4936f9869d13df384",
        image: "https://m.media-amazon.com/images/I/61aZg6hxGcL._AC_UL320_.jpg",
        title:
          "Parker Vector Standard Calligraphy CT Fountain Pen (Black), 1 Count (P…",
        rating: 4.1,
        offer: "",
        price: 396,
        maxprice: 550,
        discount: "(28% off)",
        delivery: "FREE Delivery by Amazon",
        view: "(3,986)",
        category: "product",
        quantity: 1,
        time: "2:40:12 pm",
        date: "Thu Mar 30 2023",
      },
      {
        _id: "642551f4936f9869d13df384",
        image: "https://m.media-amazon.com/images/I/61aZg6hxGcL._AC_UL320_.jpg",
        title:
          "Parker Vector Standard Calligraphy CT Fountain Pen (Black), 1 Count (P…",
        rating: 4.1,
        offer: "",
        price: 396,
        maxprice: 550,
        discount: "(28% off)",
        delivery: "FREE Delivery by Amazon",
        view: "(3,986)",
        category: "product",
        quantity: 1,
        time: "2:40:12 pm",
        date: "Thu Mar 30 2023",
      }
      
  ];
  return (
    <div>
      <br />
      <br />
      <br />
      <Heading textAlign={"center"}>My Order</Heading>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          width:"80%",
          margin:"auto",
          padding:"20px"
          
        }}
      >
        {data.map((el) => (
          <div key={el._id} style={{width:"70%",margin:"auto",padding:"20px",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}>
            <Image src={el.image} alt="order image" />
            <h1 style={{fontWeight:"bold"}}>{el.title}</h1>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h3 style={{fontWeight:"bold"}}>Quantity: {el.quantity}</h3>
              <h3 style={{fontWeight:"bold"}}>Price: ₹{el.price*el.quantity}</h3>
            </div>
            <h4 style={{fontWeight:"bold"}}>Time: {el.time}</h4>
            <h4 style={{fontWeight:"bold"}}>Date: {el.date}</h4>
          </div>
        ))}
      </div>
      <br />
      <Footer/>
    </div>
  );
}
