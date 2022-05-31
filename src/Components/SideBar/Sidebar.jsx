import {
  Box,
  Button,
  Flex,
  Heading,
  ListIcon,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Slices/AuthSlice";
import { toast } from "react-toastify";

export const Sidebar = ({ onOpen }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("Logout Successfully");
  };
  return (
    <Box
      position="sticky"
      bottom="0"
      top="0"
      p="5"
      h="fit-content"
      w="25rem"
      left="2rem"
    >
      <Flex>
        <Heading fontSize="5xl" p="3" fontFamily="cursive" color="blue.600">
        FriendlyGalaxy
        </Heading>
      </Flex>
      <Flex justifyContent="center">
        <UnorderedList listStyleType="none" w="100%">
          <ListItem
            fontSize="1.7rem"
            borderLeft={`${pathname === "/homepage" ? "2px" : null}`}
            borderLeftColor={`${pathname === "/homepage" ? "blue.700" : null}`}
            p="4"
            cursor="pointer"
            borderRadius="0.5rem"
            fontWeight="bold"
            my="5"
            _hover={{ bg: "gray.100", color: "blue.600" }}
            color={`${pathname === "/homepage" ? "blue.700" : "black"}`}
            bg={`${pathname === "/homepage" ? "gray.200" : null}`}
            onClick={() => navigate("/homepage")}
          >
            <ListIcon as={AiOutlineHome} />
            Home
          </ListItem>
          <ListItem
            fontSize="1.7rem"
            p="5"
            fontWeight="bold"
            cursor="pointer"
            borderRadius="0.5rem"
            borderLeft={`${pathname === "/explore" ? "2px" : null}`}
            borderLeftColor={`${pathname === "/explore" ? "blue.700" : null}`}
            my="5"
            _hover={{ bg: "gray.100", color: "blue.600" }}
            color={`${pathname === "/explore" ? "blue.600" : "black"}`}
            bg={`${pathname === "/explore" ? "gray.200" : null}`}
            onClick={() => navigate("/explore")}
          >
            <ListIcon as={MdOutlineExplore} />
            Explore
          </ListItem>
          <ListItem
            fontSize="1.7rem"
            p="5"
            fontWeight="bold"
            cursor="pointer"
            borderRadius="0.5rem"
            borderLeft={`${pathname === "/bookmark" ? "2px" : null}`}
            borderLeftColor={`${pathname === "/bookmark" ? "blue.700" : null}`}
            my="5"
            _hover={{ bg: "gray.100", color: "blue.600" }}
            color={`${pathname === "/bookmark" ? "blue.600" : "black"}`}
            bg={`${pathname === "/bookmark" ? "gray.200" : null}`}
            onClick={() => navigate("/bookmark")}
          >
            <ListIcon as={FaRegBookmark} />
            Bookmark
          </ListItem>
          <ListItem
            fontSize="1.7rem"
            p="5"
            fontWeight="bold"
            cursor="pointer"
            borderRadius="0.5rem"
            borderLeft={`${pathname === "/profile" ? "2px" : null}`}
            borderLeftColor={`${pathname === "/profile" ? "blue.700" : null}`}
            my="5"
            bg={`${pathname === "/profile" ? "gray.200" : null}`}
            onClick={() => navigate("/profile")}
            color={`${pathname === "/profile" ? "blue.600" : "black"}`}
            _hover={{ bg: "gray.100", color: "blue.600" }}
          >
            <ListIcon as={CgProfile} />
            Profile
          </ListItem>
          <ListItem
            fontSize="1.7rem"
            p="5"
            fontWeight="bold"
            cursor="pointer"
            borderRadius="0.5rem"
            borderLeft={`${pathname === "/" ? "2px" : null}`}
            borderLeftColor={`${pathname === "/" ? "blue.700" : null}`}
            my="5"
            bg={`${pathname === "/" ? "gray.200" : null}`}
            onClick={logoutHandler}
            color={`${pathname === "/" ? "blue.600" : "black"}`}
            _hover={{ bg: "gray.100", color: "blue.600" }}
          >
            <ListIcon as={FiLogOut} />
            LogOut
          </ListItem>
        </UnorderedList>
      </Flex>
      <Button
        m="6"
        fontSize="2rem"
        p="2rem"
        bg="blue.600"
        colorScheme="blue.600"
        onClick={onOpen}
      >
        Create Post
      </Button>
    </Box>
  );
};
