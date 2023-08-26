import { Box, Center, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import Invest from "./invest.png";
import { PiUserListFill } from "react-icons/pi";
import { BsCheck2Circle } from "react-icons/bs";
import { GiTurtle } from "react-icons/gi";
import { LiaMedalSolid } from "react-icons/lia";
const GridComp = () => {
  return (
    <Box>
      <Center>
        <Grid
          pt="30px"
          w="80%"
          h={["300px", "400px", "500px"]}
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(9, 1fr)"
          gap={4}
        >
          <GridItem
            colSpan={2}
            bg="#FEF8EC"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border={"1px solid #FEF8EC"}
            borderRadius={"10%"}
            display={"flex"}
            color="#7C59CF"
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            p="10px"
            gap={2}
            alignItems={"center"}
          >
            {" "}
            <div
              style={{
                rotate: "-30deg",
                backgroundColor: "#FFE8C8",
              }}
            >
              <PiUserListFill fontSize={"30px"} color="#FF9F1B" />
            </div>
            <Text fontSize={"10px"}>ENVESTPE</Text>
            <Text>Why does it make sense to start with us?</Text>
          </GridItem>

          <GridItem
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border={"1px solid #FEF8EC"}
            borderRadius={"10%"}
            display={"flex"}
            justifyContent={"space-evenly"}
            p="10px"
            gap={2}
            alignItems={"center"}
            colSpan={4}
            bg="#FAFCFD"
          >
            <Box w="70%">
              <Text maxWidth={"200px"} color="#7C59CF">
                We value your precious time.
              </Text>
              <Text maxWidth={"200px"}>
                No regularly licensce required as we have everything for you to
                get started.
              </Text>
            </Box>
            <Box w="30%" alignSelf={"flex-end"}>
              <Image w="100%" src={Invest} alt="" />
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border={"1px solid #FEF8EC"}
            borderRadius={"10%"}
            rowSpan={2}
            p="20px"
            colSpan={3}
            bg="#FEF8EC"
          >
            <Box w="fit-content" p="7px" backgroundColor={"#CCE4FF"}>
              <GiTurtle color="#0425CE" />
            </Box>
            <Text
              alignSelf={"center"}
              pt="10px"
              color="#7C59CF"
              fontSize={"10px"}
            >
              FUND DEPOSITS
            </Text>
            <Text color="#7C59CF">Fully digital FDs for your users</Text>
            <Text fontSize={["10px", "13px", "auto"]}>
              Offer fixed deposits on your app or website, from multiple banks.
              Embed a pre-built SDK and go live in weeks.
            </Text>
            <Box h={["", "", "70%"]} borderTopRadius={"5%"} p="5px" pt="10px">
              <Box
                borderRadius={"5%"}
                p="10px"
                bgColor={"#D5ECE0"}
                h="50%"
                align="center"
              >
                <div
                  style={{
                    padding: "5px",
                    borderRadius: "50%",
                    width: "fit-content",
                    backgroundColor: "#FFB036",
                    rotate: "180deg",
                    fontSize: "25px",
                  }}
                >
                  {" "}
                  <LiaMedalSolid color="#F87700" />
                </div>
                <Text fontSize={["10px", "12px", "20px"]} color="green">
                  FD booked successfuly!
                </Text>
                <Text fontSize={["7px", "9px", "13px"]}>
                  Receipt cent to email
                </Text>
              </Box>
              <Box bgColor={"#fff"} p="10px" borderRadius={"5%"} h="50%">
                <Text fontSize={["7px", "9px", "13px"]}>
                  Maturity insturctions
                </Text>
                <Text fontSize={["10px", "12px", "17px"]}>Auto-redemption</Text>
                <Text fontSize={["7px", "9px", "13px"]}> Debit account</Text>
                <Text fontSize={["10px", "12px", "17px"]}>
                  HDFC xxxx 8265 IFSC HDFC0000075
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border={"1px solid #FEF8EC"}
            borderRadius={"10%"}
            colSpan={3}
            bg="#FAFCFD"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            p="10px"
            gap={2}
            // alignItems={"center"}
          >
            {" "}
            <Text alignSelf={"center"} color="#7C59CF" fontSize={"10px"}>
              MUTUAL FUNDS
            </Text>
            <Text color="#7C59CF">
              Get the complete MF Infra & focus on customer engagement
            </Text>
            <Box
              fontSize={["10px", "13px", "auto"]}
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>SEBI compliant KYC process</Text>
            </Box>
            <Box
              display={"flex"}
              fontSize={["10px", "13px", "auto"]}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>Mu-AMC empanelments </Text>
            </Box>
            <Box
              display={"flex"}
              fontSize={["10px", "13px", "auto"]}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>Transact & Track orders</Text>
            </Box>
            <Box
              display={"flex"}
              fontSize={["10px", "13px", "auto"]}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>Advanced reporting</Text>
            </Box>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            border={"1px solid #FEF8EC"}
            borderRadius={"10%"}
            colSpan={3}
            bg="#FAFCFD"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            p="10px"
            gap={2}
            // alignItems={"center"}
          >
            {" "}
            <Text alignSelf={"center"} color="#7C59CF" fontSize={"10px"}>
              Indian Equity
            </Text>
            <Text color="#7C59CF">One gateway for all top securities</Text>
            <Box
              fontSize={["10px", "13px", "auto"]}
              display={"flex"}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>
                Enable stocks, ETFs & expert curated stock baskets in your app
              </Text>
            </Box>
            <Box
              display={"flex"}
              fontSize={["10px", "13px", "auto"]}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>Integrates with all major brokers</Text>
            </Box>
            <Box
              display={"flex"}
              fontSize={["10px", "13px", "auto"]}
              gap={2}
              alignItems={"center"}
            >
              <BsCheck2Circle />
              <Text>
                Offer expert curated & monitored stock bosset solutions
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default GridComp;
