import { Box, Flex, ListIcon, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { BsFillBookmarkFill, BsFillPlusCircleFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const MobileNavbar = ({ onOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Box display={{ base: "block", md: "none" }}>
      <UnorderedList
        listStyleType="none"
        display="flex"
        position="fixed"
        bottom="0"
        justifyContent="space-between"
        zIndex="3"
        bg="gray.300"
        p="1rem"
        w="100%"
        ml="0"
      >
        <ListItem
          cursor="pointer"
          fontWeight="bold"
          fontSize="3rem"
          onClick={() => navigate("/homepage")}
        >
          <AiOutlineHome
            color={`${pathname === "/homepage" ? "#1e40af" : "black"}`}
            onClick={() => navigate("/homepage")}
          />
        </ListItem>
        <ListItem
          fontSize="3rem"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/bookmark")}
        >
          <BsFillBookmarkFill
            color={`${pathname === "/bookmark" ? "#1e40af" : "black"}`}
          />
        </ListItem>
        <ListItem
          fontSize="3rem"
          color="blue.600"
          fontWeight="bold"
          cursor="pointer"
          disabled={`${pathname === "/bookmark"}` === "true" ? true : false}
        >
          <BsFillPlusCircleFill onClick={onOpen} />
        </ListItem>
        <ListItem
          fontSize="3rem"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/explore")}
        >
          <MdOutlineExplore
            color={`${pathname === "/explore" ? "#1e40af" : "black"}`}
          />
        </ListItem>
        <ListItem
          fontSize="3rem"
          fontWeight="bold"
          cursor="pointer"
          onClick={() => navigate("/profile")}
        >
          <CgProfile
            color={`${pathname === "/profile" ? "#1e40af" : "black"}`}
          />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
