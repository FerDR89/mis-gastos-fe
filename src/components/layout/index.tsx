import { Outlet } from "react-router-dom";
import MyFooter from "../footer";
import { Container, Box, Text } from "@chakra-ui/react";
import MyMenu from "../menu";

export default function Layout() {
  return (
    <Container
      bgColor={"bgColor"}
      maxW="100%"
      minH="100vh"
      w={["base", "full"]}
      p={"10px 15px"}
      boxSizing={"border-box"}
      display="flex"
      flexDir={"column"}
      alignItems="center"
    >
      <Box
        maxW="1200px"
        w={"full"}
        h={"10vh"}
        bgColor="bgColorComponents"
        borderRadius={"5px"}
        display="flex"
        alignItems={"center"}
        justifyContent="space-between"
        pl={"5px"}
      >
        <Text
          bgGradient="linear(to-l, #ABACE3, #ABAAA2 )"
          bgClip="text"
          fontSize={["1.5em", "2em"]}
          fontWeight="extrabold"
          fontFamily={"Orbitron, sans-serif"}
        >
          MP
        </Text>
        <MyMenu />
      </Box>
      <Box
        maxW="1200px"
        w={"full"}
        minH={"calc(80vh - 20px)"}
        bgColor="bgColorComponents"
        borderRadius={"5px"}
      >
        <Outlet />
      </Box>
      <Box
        maxW="1200px"
        w={"full"}
        h={"10vh"}
        bgColor="bgColorComponents"
        borderRadius={"5px"}
      >
        <MyFooter />
      </Box>
    </Container>
  );
}
