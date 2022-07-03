import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import {
  FollowingSuggestions,
  MobileNavbar,
  PostCard,
  PostModal,
  Sidebar,
} from "../../Components";
import {
  latestPostFilter,
  trendingPostFilter,
} from "../../Redux/Slices/PostsSlice";
import { getAlluser, getpost } from "../../Redux/thunks";
import { logoutUser } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Explore = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const [editPosts, setEditpost] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpost());
    dispatch(getAlluser());
  }, []);

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("logout successfully");
  };

  return (
    <>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        editPosts={editPosts}
        setEditpost={setEditpost}
      />
      <Box
        position="sticky"
        top="0"
        zIndex="4"
        display={{ base: "flex", md: "none", lg: "none" }}
        flexDirection="row"
        width="100%"
        bg="gray.200"
        borderBottom="2px"
        cursor="pointer"
        justifyContent="space-between"
        borderBottomColor="blue.400"
      >
        <Heading
          fontSize={{ base: "6xl", md: "4.5xl", lg: "5xl" }}
          fontFamily=" 'Lobster', cursive"
          color="blue.600"
          p="1.5rem"
          onClick={()=>navigate("/homepage")}
        >
          FriendlyGalaxy
        </Heading>
        <IconButton
          icon={<MdOutlineLogout />}
          fontSize="4rem"
          p="1.5rem"
          bg="transparent"
          marginTop="2rem"
          _focus={{ borderColor: "red.900" }}
          onClick={logoutHandler}
        />
      </Box>
      <MobileNavbar onOpen={onOpen} />
      <Flex
        gap="2rem"
        mr={{ base: "2rem", md: "7rem" }}
        ml={{ base: "2rem", md: "0" }}
        justifyContent="center"
        overflow="hidden"
        direction={{ base: "column-reverse", md: "row", lg: "row" }}
      >
        <Sidebar onOpen={onOpen} />
        <Box>
          <Flex
            justifyContent="center"
            p="1rem"
            gap="2rem"
            bg="gray.100"
            position={{ base: "sticky", lg: "fixed" }}
            top="0"
            zIndex="4"
            borderRadius="0.5rem"
            w="47%"
          >
            <Button
              fontSize="2rem"
              bg="blue.500"
              p="1.5rem"
              colorScheme="blue.600"
              onClick={() => dispatch(trendingPostFilter())}
            >
              Trending
            </Button>
            <Button
              fontSize="2rem"
              bg="blue.500"
              p="1.5rem"
              colorScheme="blue.600"
              onClick={() => dispatch(latestPostFilter())}
            >
              Latest
            </Button>
          </Flex>

          <Flex
            w={["100%", "100%", "60rem"]}
            paddingTop={{ base: "2rem", md: "6rem" }}
            padding="2rem 0 6rem 0"
            flexDirection="column"
            gap="2rem"
          >
            {posts?.length ? (
              [...posts].reverse().map((post) => {
                return (
                  <PostCard
                    onOpen={onOpen}
                    key={post._id}
                    post={post}
                    setEditpost={setEditpost}
                  />
                );
              })
            ) : (
              <Heading color="gray.400" textAlign="center">
                Nothing in Explore
              </Heading>
            )}
          </Flex>
        </Box>
        <FollowingSuggestions />
      </Flex>
    </>
  );
};
