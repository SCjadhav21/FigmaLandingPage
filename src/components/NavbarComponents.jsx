import { Box } from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const NavbarComponent = () => {
  return (
    <Box
      p="5px"
      backgroundColor={"#151E28"}
      display={"flex"}
      color={"#fff"}
      justifyContent={"space-evenly"}
      justifyItems={"center"}
      gap={["", 5, ""]}
    >
      <Box color="red" fontSize={["5px", "9px", "14px", "20px"]}>
        0.88%
      </Box>
      <Box
        fontSize={["5px", "9px", "14px", "20px"]}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          fontWeight={"500"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          BHARTIARTL{" "}
          <span style={{ marginLeft: "8px", fontWeight: "normal" }}>
            856.25
          </span>
        </Box>
        <Box
          marginLeft="8px"
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          color="red"
        >
          <AiFillCaretDown />
          0.05%
        </Box>
      </Box>
      <Box
        fontSize={["5px", "9px", "14px", "20px"]}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          fontWeight={"500"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          HDFCBANK{" "}
          <span style={{ marginLeft: "8px", fontWeight: "normal" }}>
            1,590.75
          </span>
        </Box>
        <Box
          marginLeft="8px"
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          color="red"
        >
          <AiFillCaretDown />
          0.41%
        </Box>
      </Box>
      <Box
        fontSize={["5px", "9px", "14px", "20px"]}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          fontWeight={"500"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          HINDUNILVR{" "}
          <span style={{ marginLeft: "8px", fontWeight: "normal" }}>
            2,554.75
          </span>
        </Box>
        <Box
          marginLeft="8px"
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          color="#1AAF55"
        >
          <AiFillCaretUp />
          0.45%
        </Box>
      </Box>
      <Box
        fontSize={["5px", "9px", "14px", "20px"]}
        display={"flex"}
        justifyContent={"space-evenly"}
      >
        <Box
          fontWeight={"500"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          INDIGO{" "}
          <span style={{ marginLeft: "8px", fontWeight: "normal" }}>
            2,454.30
          </span>
        </Box>
        <Box
          marginLeft="8px"
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          color="red"
        >
          <AiFillCaretDown />
          0.22%
        </Box>
      </Box>
    </Box>
  );
};

export default NavbarComponent;
