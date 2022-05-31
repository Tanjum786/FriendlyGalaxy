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
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupPage } from "../../Redux/thunks";

export const Signup = () => {
  const [show, setshow] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    firstName: "",
    password: "",
    lastName: "",
    confirmpassword: "",
  });
  const { firstName, lastName, password, username, confirmpassword } = newUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SignupHandler = async (e) => {
    if (
      firstName !== "" &&
      username !== "" &&
      lastName !== "" &&
      password !== "" &&
      confirmpassword !== ""
    ) {
      e.preventDefault();
      if (password === confirmpassword) {
        const response = await dispatch(signupPage(newUser));
        if (response?.payload?.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.data.createdUser)
          );
          localStorage.setItem("token", response.payload.data.encodedToken);
          navigate(location?.state?.from?.pathname|| "/homepage");
          setNewUser({
            username: "",
            firstName: "",
            password: "",
            lastName: "",
            confirmpassword: "",
          });
          toast.success(`${firstName} successfully Created account`);
        } else {
          toast.error("Somthing went wrong");
        }
      } else {
        toast.error("Password are not matched");
      }
    } else {
      toast.warning("Fill all the filed");
    }
  };

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
           FriendlyGalaxy
          </Heading>

          <Heading fontFamily="cursive">Signup</Heading>

          <FormControl>
            <VStack spacing="2rem" p="2rem">
              <Input
                fontSize="1.5rem"
                placeholder="Enter First Name"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
                value={firstName}
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />
              <Input
                fontSize="1.5rem"
                type="lastName"
                name="lastName"
                placeholder="Enter your lastName"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
                value={lastName}
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />

              <Input
                fontSize="1.5rem"
                placeholder=" Username"
                size="lg"
                p="2rem"
                mb="4"
                borderColor="gray.400"
                value={username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
              <Input
                fontSize="1.5rem"
                placeholder="Enter your Password"
                size="lg"
                p="2rem"
                mb="4"
                value={password}
                borderColor="gray.400"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
              <InputGroup size="lg">
                <Input
                  placeholder="Confirm password"
                  type={show ? "text" : "password"}
                  fontSize="1.5rem"
                  p="2rem"
                  borderColor="gray.400"
                  value={confirmpassword}
                  onChange={(e) =>
                    setNewUser({ ...newUser, confirmpassword: e.target.value })
                  }
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
                type="submit"
                onClick={SignupHandler}
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
