import { Box, Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  PostCard,
  PostModal,
  Sidebar,
  UserfollowedSidebar,
} from "../../Components";

export const Explore = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Box>
          <Flex
            justifyContent="center"
            p="1rem"
            gap="2rem"
            bg="gray.200"
            position="sticky"
            top="0"
            zIndex="2"
            borderRadius="0.5rem"
          >
            <Button fontSize="2rem" bg="blue.500" p="1.5rem" colorScheme="blue.600">
              Tranding
            </Button>
            <Button
              fontSize="2rem"
              bg="blue.500"
              p="1.5rem"
              colorScheme="blue.600"
              >
              Latest
            </Button>
          </Flex>

          <Flex
            w="100%"
            pt="2rem"
            flexDirection="column"
            gap="2rem"
            alignItems="center"
          >
            <PostCard onOpen={onOpen} />
          </Flex>
        </Box>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
