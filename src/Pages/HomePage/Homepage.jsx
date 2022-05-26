import {
  Container,
  Flex,
  Text,
  Box,
  IconButton,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import {
  Sidebar,
  UserfollowedSidebar,
  PostModal,
  PostCard,
} from "../../Components";

export const Homepage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
          <PostCard onOpen={onOpen} />
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
