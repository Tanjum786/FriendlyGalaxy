import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  PostCard,
  PostModal,
  Sidebar,
  UserfollowedSidebar,
} from "../../Components";
import {
  latestPostFilter,
  trendingPostFilter,
} from "../../Redux/Slices/PostsSlice";
import { getpost } from "../../Redux/thunks";

export const Explore = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const [editPosts, setEditpost] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpost());
  }, []);

  return (
    <>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        editPosts={editPosts}
        setEditpost={setEditpost}
      />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Box>
          <Flex
            justifyContent="center"
            p="1rem"
            gap="2rem"
            bg="gray.100"
            position="sticky"
            top="0"
            zIndex="3"
            borderRadius="0.5rem"
          >
            <Button
              fontSize="2rem"
              bg="blue.500"
              p="1.5rem"
              colorScheme="blue.600"
              onClick={() => dispatch(trendingPostFilter())}
            >
              Tranding
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
            w="60rem"
            pt="2rem"
            flexDirection="column"
            gap="2rem"
            alignItems="center"
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
              <Heading color="gray.400">Nothing in Explore</Heading>
            )}
          </Flex>
        </Box>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
