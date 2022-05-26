import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Signup = () => {
  const [show, setshow] = useState(false);
  return (
    <Container maxW={"container.lg"} textAlign="center" py={20}>
      <Flex justifyContent="center">
        <VStack
          w="40rem"
          fontFamily="cursive"
          p="10"
          borderRadius="0.5rem"
          spacing="5"
          boxShadow="dark-lg"
          backgroundColor="whiteAlpha.500"
        >
          <Heading
            fontSize="5xl"
            borderBottom="1px"
            p="2"
            fontFamily="cursive"
            borderBottomColor="blue.600"
            color="blue.600"
          >
            GalaxyFriendly
          </Heading>

          <Heading fontFamily="cursive">Signup</Heading>

          <FormControl>
            <VStack spacing="2rem" p="2rem">
              <Input
                fontSize="1.5rem"
                type="email"
                name="email"
                placeholder="Enter your Email"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
              />
              <Input
                fontSize="1.5rem"
                placeholder="Enter Full Name"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
              />
              <Input
                fontSize="1.5rem"
                placeholder="Enter your Username"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
              />
              <Input
                fontSize="1.5rem"
                placeholder="Enter your Password"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
              />
              <InputGroup size="lg">
                <Input
                  placeholder="Confirm password"
                  type={show ? "text" : "password"}
                  fontSize="1.5rem"
                  p="2rem"
                  borderColor="gray.400"
                />
                <InputRightElement
                  fontSize="2rem"
                  cursor="pointer"
                  color="blue.600"
                  onClick={() => setshow(!show)}
                  children={
                    show ? (
                      <ViewIcon marginTop="1.5rem" />
                    ) : (
                      <ViewOffIcon marginTop="1.5rem" />
                    )
                  }
                />
              </InputGroup>
              <Button
                w="100%"
                p="1.5rem"
                bg="blue.600"
                variant="solid"
                fontSize="1.5rem"
                colorScheme="blue.600"
              >
                Sign Up
              </Button>
              <Text fontSize="2xl">
                Have an account ?
                <NavLink to="/">
                  <strong style={{ borderBottom: "2px solid blue" }}>
                    Log in
                  </strong>
                </NavLink>
              </Text>
            </VStack>
          </FormControl>
        </VStack>
      </Flex>
    </Container>
  );
};
