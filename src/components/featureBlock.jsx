import { Box, Center, Text, Button, Link, grid, Image } from "@chakra-ui/react";
import React from "react";

const FeatureBlock = () => {
  return (
    <Box>
      <Center>
        {" "}
        <Box pt="30px" w="80%">
          <Box
            fontSize={["12px", "16x", "20px", "25px"]}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box maxW={"50%"}>
              <Text color="#5DE2B0">FEATURES</Text>

              <Text mt="5px" fontWeight={"bold"} maxWidth={"400px"}>
                Launch the most Engaging Invest-Tech Solutions
              </Text>
              <Text mt="5px">
                We offer a suite of B2B Invest-tech solutions, that are
                cost-effective way to offer an engaging investment experience to
                your customers, with a faster time to market
              </Text>
              <Box mt="5px" display={"flex"} alignItems={"center"} gap={5}>
                <Button
                  boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                  mt="5px"
                  fontSize={["12px", "16x", "20px", "25px"]}
                  borderRadius={"20%"}
                  bgColor={"#FBBF23"}
                >
                  Get Started
                </Button>
                <Text textDecor={"underline"}>Lern More</Text>
              </Box>
            </Box>
            <Box
              maxW={"50%"}
              display={"grid"}
              gridTemplateColumns={"repeat(2, 1fr)"}
              gap={5}
            >
              <Box
                bgColor={"#F3F3F3"}
                color={"#979797"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-evenly"}
                justifyItems={"center"}
                alignItems={"center"}
                borderRadius={"20%"}
                fontWeight={"400"}
                p="5px"
              >
                <Text>Protection</Text>

                <Image
                  w="30%"
                  h="50%"
                  bgColor={"#F3F3F3"}
                  src="https://www.pngkit.com/png/detail/326-3260409_png-file-protection-vector-png.png"
                  alt=""
                />
                <Text maxW={"80%"}>Data protection guaretees</Text>
              </Box>
              <Box
                mt="-5%"
                w="110%"
                h="110%"
                bgColor={"#171E27"}
                color={"#FFFFFF"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-evenly"}
                justifyItems={"center"}
                alignItems={"center"}
                borderRadius={"20%"}
                fontWeight={"400"}
                p="8px"
              >
                <Text>Traking</Text>

                <Image
                  w="30%"
                  h="50%"
                  bgColor={"#F3F3F3"}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7mqUEYwZ9eRl-YquP6UephQRUq07U8IzeBUr6aJLs5g0CA4ibE863xqkfAcsPIRTNPQ&usqp=CAU"
                  alt=""
                />
                <Center>
                  <Text maxW={["100%", "95%", "90%"]}>
                    Track all your users' financial trasactions
                  </Text>
                </Center>
              </Box>{" "}
              <Box
                bgColor={"#F3F3F3"}
                color={"#979797"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-evenly"}
                justifyItems={"center"}
                alignItems={"center"}
                borderRadius={"20%"}
                fontWeight={"400"}
                p="5px"
              >
                <Text>Flexibility</Text>
                <Image
                  w="30%"
                  h="50%"
                  bgColor={"#F3F3F3"}
                  src="https://static.thenounproject.com/png/318506-200.png"
                  alt=""
                />
                <Center>
                  <Text maxW={["100%", "95%", "90%"]}>
                    Custom made for your requirements
                  </Text>
                </Center>{" "}
              </Box>{" "}
              <Box
                bgColor={"#F3F3F3"}
                color={"#979797"}
                display={"flex"}
                flexDir={"column"}
                justifyContent={"space-evenly"}
                justifyItems={"center"}
                alignItems={"center"}
                borderRadius={"20%"}
                fontWeight={"400"}
                p="5px"
              >
                <Text>Easiness</Text>
                <Image
                  w="30%"
                  h="50%"
                  bgColor={"#F3F3F3"}
                  src="https://w7.pngwing.com/pngs/260/448/png-transparent-computer-icons-easy-installation-text-logo-desktop-wallpaper-thumbnail.png"
                  alt=""
                />
                <Center>
                  <Text maxW={["100%", "90%", "80%"]}>
                    Go-to market n less than 7 days
                  </Text>
                </Center>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default FeatureBlock;
