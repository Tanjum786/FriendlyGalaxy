import {
  Container,
  Flex,
  Text,
  Box,
  IconButton,
  useDisclosure,
  Avatar,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  Sidebar,
  UserfollowedSidebar,
  PostModal,
  PostCard,
} from "../../Components";
import { getpost } from "../../Redux/thunks";

export const Homepage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { posts, status } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idel") {
      dispatch(getpost());
    }
  }, [status, posts, dispatch]);
  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Flex flexWrap="wrap" justifyContent="space-between" marginRight="2rem">
        <Sidebar onOpen={onOpen} />
        <Flex w="45%" paddingTop="2rem" flexDirection="column" gap="2rem">
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
              <Text fontSize="2rem" color="gray.400">
                Post Something Intresting.....
              </Text>
              <IconButton
                icon={<BsFillPlusCircleFill />}
                color="blue.600"
                fontSize="2rem"
                bg="transparent"
              />
            </Flex>
          </Box>
          {posts?.length ? (
            posts.map((post) => {
              return <PostCard onOpen={onOpen} key={post._id} post={post} />;
            })
          ) : (
            <Heading color="gray.400" textAlign="center">Lodding.....</Heading>
          )}
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
