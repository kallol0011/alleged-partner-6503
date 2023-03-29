import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AutoPlay from "../components/cardSLider";
import ImgSlider from "../components/ImageSlider";

import Carousel from "../components/SimpleSlider";

const Home = () => {
  const todayDeal = [
    {
      img: "https://m.media-amazon.com/images/I/41Diz41FkhL._AC_SY200_.jpg",
      discount: 32,
      DealOfDay: "Deal of the Day",
      desc: " Grand Gaming Days offers on Bestselling Gaming Laptops & Desktops - Exchange & No Cost EMI Available",
    },
    {
      img: "https://m.media-amazon.com/images/I/41DjFnGQ1FL._AC_SY200_.jpg",
      discount: 31,
      DealOfDay: "Deal of the Day",
      desc: "High Performance Handpicked Desktop Computers from HP, Lenovo and more",
    },
    {
      img: "https://m.media-amazon.com/images/I/31aNgbvYJKL._AC_SY200_.jpg",
      discount: 66,
      DealOfDay: "Deal of the Day",
      desc: "Best Prices on boAt Headphones, Soundbars and Speakers",
    },
    {
      img: "https://m.media-amazon.com/images/I/31G1NouVxaL._AC_SY200_.jpg",
      discount: 80,
      DealOfDay: "Deal of the Day",
      desc: "Jaw dropping deals on headsets",
    },

    {
      img: "https://m.media-amazon.com/images/I/31EXkIBVKUL._AC_SY200_.jpg",
      discount: 50,
      DealOfDay: "Deal of the Day",
      desc: "adidas & campus Footwear",
    },
    {
      img: "https://m.media-amazon.com/images/I/416x-scGWgL._AC_SY200_.jpg",
      discount: 64,
      DealOfDay: "Deal of the Day",
      desc: "Grand Gaming Days Offers on Accessories and Storage Devices",
    },

    {
      img: "https://m.media-amazon.com/images/I/31VfkewLnlL._AC_SY200_.jpg",
      discount: 54,
      DealOfDay: "Deal of the Day",
      desc: "cooking essential",
    },
    {
      img: "https://m.media-amazon.com/images/I/91kKqnkv9jL._AC_SY200_.jpg",
      discount: 52,
      DealOfDay: "Deal of the Day",
      desc: "TOP Deals on PUMA & Skechers footwear",
    },

    {
      img: "https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg",
      discount: 12,
      DealOfDay: "Deal of the Day",
      desc: "Handpicked Intel Powered Laptops; High Performance",
    },
    {
      img: "https://m.media-amazon.com/images/I/317lhW5iHVL._AC_SY200_.jpg",
      discount: 65,
      DealOfDay: "Deal of the Day",
      desc: "Powerbank from Mi, Ambrane, URBN and more",
    },

    {
      img: "https://m.media-amazon.com/images/I/41yxd6A+ZAL._AC_SY200_.jpg",
      discount: 65,
      DealOfDay: "Deal of the Day",
      desc: "Top deals on Truke, Govo and more",
    },
    {
      img: "https://m.media-amazon.com/images/I/41wcMkODJLL._AC_SY200_.jpg",
      discount: 75,
      DealOfDay: "Deal of the Day",
      desc: "Amazing deals on pTron, Jabra, Portronics",
    },
    {
      img: "https://m.media-amazon.com/images/I/61QQtY6qtHL._AC_SY200_.jpg",
      discount: 82,
      DealOfDay: "Deal of the Day",
      desc: "Levi's, Allen Solly, ANNI DESIGNER, Janasya & more",
    },
    {
      img: "https://m.media-amazon.com/images/I/31aTPRvXiSL._AC_SY200_.jpg",
      discount: 77,
      DealOfDay: "Deal of the Day",
      desc: "Exciting  deals on Mivi, Wecool, Wings",
    },
    {
      img: "https://m.media-amazon.com/images/I/21wNUazPKRL._AC_SY200_.jpg",
      discount: 20,
      DealOfDay: "Deal of the Day",
      desc: "Never before deals on HP printers",
    },
    {
      img: "https://m.media-amazon.com/images/I/41bFnhrsyOL._AC_SY200_.jpg",
      discount: 19,
      DealOfDay: "Deal of the Day",
      desc: "Vivo Y75 - 18W fast charge, FHD plus display",
    },
    {
      img: "https://m.media-amazon.com/images/I/41wyFlObIrL._AC_SY200_.jpg",
      discount: "25",
      DealOfDay: "Deal of the Day",
      desc: "Nokia 5710 - newly launched 4G feature phone",
    },
    {
      img: "https://m.media-amazon.com/images/I/31Zq-alRH9L._AC_SY200_.jpg",
      discount: 32,
      DealOfDay: "Deal of the Day",
      desc: "Vacuum Cleaners from Top Brands",
    },
  ];
  const acc = [
    {img: "https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY200_.jpg"},
    { img: "https://m.media-amazon.com/images/I/51+UotA4ExL._AC_SY200_.jpg"},
    {img: "https://m.media-amazon.com/images/I/61HfJn05shL._AC_SY200_.jpg"},
    { img: "https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/612spb+L0xL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61m5Uu4OMJL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61onAgKP5gL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/81hWpe10SzL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71qOWNxv4jL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/41KuRShR97L._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/51ipgrRGu1L._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61gd9kbUlWL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61w9XoA1edL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/415yl0HeDQL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61efk5VJorL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/71Yy96fOMQL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/61sbnriokCL._AC_SY200_.jpg" },
    { img: "https://m.media-amazon.com/images/I/41EjaRq8G6L._AC_SY200_.jpg" }
  ];
  return (
    <Box>
      <Box boxSize={"border-box"}>
        <Box pos={"relative"} mt={10}>
          <Carousel />

          <Box
            border={"1px solid red"}
            ml="2"
            mr="2"
            bg="transparent"
            top={"40%"}
            zIndex={"1000"}
            pos={"absolute"}
          >
            <Flex justifyContent={"center"} gap={"6"}>
              <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
                <Heading pb={2} size="md">
                  Upgrade your home | Amazon Brands & more
                </Heading>
                <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                  <Box>
                    <Image
                      src={
                        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Mixer-186x116._SY116_CB614658577_.jpg"
                      }
                    ></Image>
                    <Text>up to 50%off | home appliances</Text>
                  </Box>
                  <Box>
                    <Image
                      src={
                        "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_bedsheet-qc1_186x116_in-en._SY116_CB594776299_.jpg"
                      }
                    ></Image>
                    <Text>up to 55%off | Bedsheets & more</Text>
                  </Box>
                  <Box>
                    <Image
                      src={
                        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Conatiner-186x116._SY116_CB614658577_.jpg"
                      }
                    ></Image>
                    <Text>Starting Rs 169 | Containers & more</Text>
                  </Box>
                  <Box>
                    <Image
                      src={
                        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Photoframe-186x116._SY116_CB614658577_.jpg"
                      }
                    ></Image>
                    <Text>Starting Rs 299 | photos frames clock & more</Text>
                  </Box>
                </Box>
              </Box>
              <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
                <Heading pb={2} size={"md"}>
                  Bluetooth Calling Smartwatch starts at ₹1,999
                </Heading>
                <Image
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
                  }
                ></Image>
              </Box>
              <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
                <Heading pb={2} size={"md"}>
                  Up to 50% off | Monitor blood sugar at home
                </Heading>
                <Image
                  src={
                    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
                  }
                ></Image>
              </Box>
              <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
                <Box>
                  <Heading pb={2} size={"md"}>
                    Sign in for your best experience
                  </Heading>
                  <Button mt={6} mb={6} w="100%" h={6} background={"yellow"}>
                    signIn securly
                  </Button>
                </Box>
                <Image src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"></Image>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box border={"1px solid red"} ml="2" mr="2" bg="transparent">
          <Flex justifyContent={"center"} gap={"6"}>
            <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
              <Heading pb={2} size="md">
                Upgrade your home | Amazon Brands & more
              </Heading>
              <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Mixer-186x116._SY116_CB614658577_.jpg"
                    }
                  ></Image>
                  <Text>up to 50%off | home appliances</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_bedsheet-qc1_186x116_in-en._SY116_CB594776299_.jpg"
                    }
                  ></Image>
                  <Text>up to 55%off | Bedsheets & more</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Conatiner-186x116._SY116_CB614658577_.jpg"
                    }
                  ></Image>
                  <Text>Starting Rs 169 | Containers & more</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Photoframe-186x116._SY116_CB614658577_.jpg"
                    }
                  ></Image>
                  <Text>Starting Rs 299 | photos frames clock & more</Text>
                </Box>
              </Box>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Bluetooth Calling Smartwatch starts at ₹1,999
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
                }
              ></Image>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Up to 50% off | Monitor blood sugar at home
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
                }
              ></Image>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Box>
                <Heading pb={2} size={"md"}>
                  Sign in for your best experience
                </Heading>
                <Button mt={6} mb={6} w="100%" h={6} background={"yellow"}>
                  signIn securly
                </Button>
              </Box>
              <Image src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"></Image>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* ///*************************************************** */}
      <Box>
        <AutoPlay items={todayDeal}/>
      </Box>
      <Box>
        <ImgSlider items={acc}/>
      </Box>
    </Box>
  );
};

export default Home;
