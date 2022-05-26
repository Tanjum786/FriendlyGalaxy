import { Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  PostCard,
  PostModal,
  Sidebar,
  UserfollowedSidebar,
} from "../../Components";

export const BookMark = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Flex
          w="45%"
          paddingTop="3rem"
          flexDirection="column"
          gap="2rem"
          alignItems="center"
        >
          <PostCard onOpen={onOpen} />
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
