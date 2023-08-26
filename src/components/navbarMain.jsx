import { Box, Center, Button, Link, Select, Flex } from "@chakra-ui/react";
import React from "react";
import { BiSolidCircle } from "react-icons/bi";
const NavbarMain = () => {
  return (
    <Box w="100%" mt="1px" backgroundColor={"#151E28"}>
      <Center>
        <Box
          w="80%"
          p="10px"
          display={"flex"}
          color={"#fff"}
          justifyContent={"space-between"}
          justifyItems={"center"}
        >
          <Box
            display={"flex"}
            gap={5}
            justifyItems={"center"}
            alignItems={"center"}
          >
            <img
              width={"30px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRupJR4R5D4MnRRneEy5hIX2pEl_RBsvkcUnA&usqp=CAU"
              alt=""
            />
            <span>InvestPe</span>
            <Button
              bgColor={"#FDECEC"}
              color="#F05656"
              borderRadius="40% 40% 40% 40%"
              display={"flex"}
              gap={2}
            >
              Gateway <BiSolidCircle />
            </Button>
          </Box>
          <Box display={"flex"} justifyItems={"center"} alignItems={"center"}>
            <Select border={"none"}>
              <option value="">Products</option>
            </Select>
            <Link>AboutUs</Link>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default NavbarMain;
