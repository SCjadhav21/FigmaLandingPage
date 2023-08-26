import { Box, Button, Center, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import Png from "./stocks.png";
import { AiFillCheckCircle } from "react-icons/ai";
const FirstBlockCompo = () => {
  return (
    <Box>
      <Center>
        {" "}
        <Box pt="30px" w="80%">
          <Box
            fontSize={["auto", "auto", "20px", "25px"]}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box maxW={"50%"}>
              <Text fontWeight={"bold"} color="#F3A61D">
                INVESTMENT STACK
              </Text>
              <Text>for India</Text>
              <Text maxWidth={"400px"}>
                Elevate Your Investment Stratergy with Our{" "}
                <span style={{ color: "#60E1AC" }}> Comprehensive APIs</span>
              </Text>
            </Box>
            <Box maxW={"50%"}>
              <Text maxWidth={"450px"}>
                Launch financial services in a matter of days. Take your pick
                from our flexible APIs, SDKs, or ready-to-use screens.
              </Text>
              <Text
                display={"flex"}
                alignItems={"center"}
                gap={1}
                justifyItems={"center"}
                fontSize={"10px"}
                textDecoration={"underline"}
              >
                See our products{" "}
                <span>
                  <AiFillCheckCircle />
                </span>
              </Text>
              <Button
                boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                mt="5px"
                h="35px"
                borderRadius={"20%"}
                bgColor={"#FBBF23"}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
          <Center>
            <Box w="90%">
              <Image w="100%" src={Png} alt="noImg" />
            </Box>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default FirstBlockCompo;
