import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";
// ("https://png.pngtree.com/png-clipart/20220628/ourmid/pngtree-hand-fingers-palm-human-hand-png-image_5376116.png");
const ConnectBlock = () => {
  return (
    <Box
      backgroundImage={
        "https://img.freepik.com/premium-photo/wrinkled-old-man-hand-pointing-finger-dark-background_44622-1336.jpg"
      }
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      border={"1px solid green"}
      m="5%"
      borderRadius={"10%"}
    >
      <Center>
        {" "}
        <Box pt="30px" w="90%">
          <Box>
            <Text
              maxW={"70%"}
              fontSize={["15px", "20px", "22px", "25px"]}
              color={"#fff"}
              fontWeight={"bold"}
            >
              Connect your platform finances now with InvestPe Gateway
            </Text>
            <Text
              mt="10px"
              maxW={"70%"}
              fontSize={["10px", "15px", "20px", "22px"]}
              color={"#fff"}
            >
              We help brokers, wealth managers, fund managers & other
              businesses/startups server their customers better with our suite
              of modern digital investment stock
            </Text>
            <Button
              boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
              mt="5px"
              fontSize={["12px", "16x", "20px", "25px"]}
              borderRadius={"20%"}
              bgColor={"#FBBF23"}
            >
              Try Investpe Now
            </Button>
          </Box>
        </Box>
      </Center>
      ;
    </Box>
  );
};

export default ConnectBlock;
