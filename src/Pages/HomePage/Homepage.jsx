import {
  Flex,
  Text,
  Box,
  IconButton,
  useDisclosure,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Sidebar,
  PostModal,
  PostCard,
  FollowingSuggestions,
  MobileNavbar,
} from "../../Components";
import { logoutUser } from "../../Redux/Slices/AuthSlice";
import { getAlluser, getpost } from "../../Redux/thunks";

export const Homepage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [editPosts, setEditpost] = useState(null);
  const { posts, status } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === "idel") {
      dispatch(getpost());
      dispatch(getAlluser());
    }
  }, [status, posts, dispatch]);
  const navigate = useNavigate();
  const followUsers = users.filter((userFollower) =>
    userFollower.followers?.some(
      (follower) => follower.username === user.username
    )
  );

  const allpost = posts.filter(
    (post) =>
      post.username === user.username ||
      followUsers?.some((followuser) => followuser.username === post.username)
  );

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
        justifyContent="space-between"
        borderBottomColor="blue.400"
      >
        <Heading
          fontSize={{ base: "6xl", md: "4.5xl", lg: "5xl" }}
          fontFamily="Crimson Text serif"
          color="blue.600"
          p="1.5rem"
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
        <Flex
          w={["100%", "50%", "50%"]}
          padding="2rem 0 6rem 0"
          flexDirection="column"
          gap="2rem"
        >
          <Box
            w="100%"
            bg="gray.200"
            cursor="pointer"
            borderRadius="0.5rem"
            p="1rem"
            h="5rem"
            marginTop="1rem"
            onClick={onOpen}
          >
            <Flex alignContent="center" justifyContent="space-between">
              <Text
                fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}
                color="gray.400"
              >
                Post Something Intresting.....
              </Text>
              <IconButton
                icon={<BsFillPlusCircleFill />}
                color="blue.600"
                fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}
                bg="transparent"
              />
            </Flex>
          </Box>
          {allpost?.length ? (
            [...allpost].reverse().map((post) => {
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
              Follow some user to see there feed
            </Heading>
          )}
        </Flex>
        <FollowingSuggestions />
      </Flex>
    </>
  );
};
