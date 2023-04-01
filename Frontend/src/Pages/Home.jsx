import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AutoPlay from "../components/cardSLider";
import {
  acc,
  decore,
  Furniture,
  game,
  HomeData,
  todayDeal,
} from "../components/Data";
import Footer from "../components/Footer";

import ImgSlider from "../components/ImageSlider";

import Carousel from "../components/SimpleSlider";

const Home = () => {
  return (
    <Box>
      <Box boxSize={"border-box"}>
        <Box pos={"relative"} mt={10}>
          <Carousel />
          <Box
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

      {/*///////////////////////////////////////////////////////////////////  */}
      <Box>
        <Box ml="2" mr="2" bg="transparent">
          <Flex justifyContent={"center"} gap={"6"}>
            <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
              <Heading pb={2} size="md">
                Automotive essentials | Up to 60% off
              </Heading>
              <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
                    }
                  ></Image>
                  <Text>Cleaning accessories</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
                    }
                  ></Image>
                  <Text>Tyre & rim care</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
                    }
                  ></Image>
                  <Text>Helmet</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
                    }
                  ></Image>
                  <Text>Vaccume cleaner</Text>
                </Box>
              </Box>
            </Box>
            <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
              <Heading pb={2} size="md">
                Up to 60% off | Professional tools, testing & more
              </Heading>
              <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
                    }
                  ></Image>
                  <Text>Professional tools</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
                    }
                  ></Image>
                  <Text>Measuring instruments</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                    }
                  ></Image>
                  <Text>Cleaning supplies</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
                    }
                  ></Image>
                  <Text>Medical supplies</Text>
                </Box>
              </Box>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Up to 70% off | Clearance store
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                }
              ></Image>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Sell on Amazon with 1-Click Launch Support
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
                }
              ></Image>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* ///*************************************************** */}
      <Box>
        <AutoPlay items={todayDeal} />
      </Box>
      {/* ///*************************************************** */}

      <Box>
        <ImgSlider
          items={acc}
          title={"Best Sellers in Computers & Accessories"}
        />
      </Box>
      {/* ///*************************************************** */}

      <Box>
        <ImgSlider
          items={Furniture}
          title={"Up to 60% off | Curated furniture picks for your home"}
        />
      </Box>
      {/* ///*************************************************** */}

      <Box>
        <ImgSlider items={HomeData} title={"Frequently repurchased in Home"} />
      </Box>

      {/* ///*************************************************** */}

      <Box m={6}>
        <Center>
          <Image src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" />
        </Center>
      </Box>

      {/* ///*************************************************** */}

      <Box>
        <ImgSlider
          items={decore}
          title={"Up to 60% off | Home décor picks from local shops"}
        />
      </Box>
      {/* ///*************************************************** */}
      <Box>
        <Box mt={6} bg="transparent">
          <Flex justifyContent={"center"} gap={"6"}>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Baby diapers & wipes at great prices
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/CC_Rev1x._SY304_CB594433898_.jpg"
                }
              ></Image>
            </Box>
            <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
              <Heading pb={2} size="md">
                Automotive essentials | Up to 60% off
              </Heading>
              <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Pregnancy_Supplements._SY116_CB667651395_.jpg"
                    }
                  ></Image>
                  <Text>Pregnancy_Supplements</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Sleep__Loungewear._SY116_CB667651395_.jpg"
                    }
                  ></Image>
                  <Text>Maternity Sleep & Loungewear</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_pillows._SY116_CB667651395_.jpg"
                    }
                  ></Image>
                  <Text>Maternity pillows</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/Maternity_Skin_care._SY116_CB667651395_.jpg"
                    }
                  ></Image>
                  <Text>Maternity Skin Maternity_Skin_care</Text>
                </Box>
              </Box>
            </Box>
            <Box w={"25%"} p={4} boxShadow="lg" bg="white" color={"black"}>
              <Heading pb={2} size="md">
                Up to 60% off | Professional tools, testing & more
              </Heading>
              <Box display="grid" gridTemplateColumns="repeat(2,1fr)" gap={4}>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/Tools1x._SY116_CB424026090_.jpg"
                    }
                  ></Image>
                  <Text>Professional tools</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/2._SY116_CB643952439_.jpg"
                    }
                  ></Image>
                  <Text>Measuring instruments</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2021/BAU_GW_Graphics/PCQC/1._SY116_CB643952439_.jpg"
                    }
                  ></Image>
                  <Text>Cleaning supplies</Text>
                </Box>
                <Box>
                  <Image
                    src={
                      "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2018/QC/med1x._SY116_CB424026091_.jpg"
                    }
                  ></Image>
                  <Text>Medical supplies</Text>
                </Box>
              </Box>
            </Box>
            <Box w={"25%"} boxShadow="lg" bg="white " color={"black"} p={4}>
              <Heading pb={2} size={"md"}>
                Diapers & wipes | Starting ₹99
              </Heading>
              <Image
                src={
                  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Baby/cnnjpp1/PC_CC_379x304V1._SY304_CB616418989_.jpg"
                }
              ></Image>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* ///*************************************************** */}

      <Box>
        <ImgSlider items={game} title={"Best Sellers in Toys & Games"} />
      </Box>
      {/* ///*************************************************** */}
      <Box textAlign={"center"}>
        <Center>
          <Box width={"20%"} p={10}>
            <Text>See personalized recommendations</Text>
            <Text background={"yellow.300"}>Sign in</Text>
            <Text>
              New customer? <Link to="/signup">Start here</Link>
            </Text>
          </Box>
        </Center>
      </Box>

      {/* ///*************************************************** */}
      <Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Home;
