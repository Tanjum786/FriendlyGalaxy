import { Avatar, Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import { BiPlus } from "react-icons/bi";

export const UserfollowedSidebar = () => {
  return (
    <Box>
      <Flex
        bg="gray.200"
        flexDirection="column"
        position="sticky"
        top="3rem"
        borderRadius="1rem"
        bottom="0"
        gap="1rem"
        p="2rem"
      >
        <Heading
          fontSize="2rem"
          borderBottomColor="blue.300"
          p="3"
          borderBottom="1px"
          textAlign="center"
        >
          Who to Follow?
        </Heading>
        <Flex
          gap="1rem"
          alignItems="center"
          w="31.5rem"
          marginTop="2"
          p="1.5rem"
          borderRadius="1rem"
          backgroundColor="gray.300"
        >
          <Avatar name="avatar" size="xl" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column">
            <Heading as="h6" fontSize="1.5rem">
              Adarsh Balika
            </Heading>
            <Text fontSize="xl" color="gray.600">
              @adarshbalika
            </Text>
          </Flex>
          <Button
            leftIcon={<BiPlus fontSize="2rem" color="whiteAlpha.800" />}
            fontSize="2xl"
            p="1rem"
            bg="blue.600"
            fontWeight="bold"
            colorScheme="blue"
          >
            Follow
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
