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
import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginPage } from "../../Redux/thunks";
import { toast } from "react-toastify";

export const Login = () => {
  const [show, setshow] = useState(false);
  const [loginuser, setLoginuser] = useState({ username: "", password: "" });
  const { username, password } = loginuser;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const guestLoginHandler = (e) => {
    e.preventDefault();
    setLoginuser(() => ({
      ...username,
      username: "tanju",
      password: "tanjum123",
    }));
  };

  const LoginHandler = async (e) => {
    if (username && password) {
      e.preventDefault();
      const response = await dispatch(loginPage(loginuser));
      if (response?.payload?.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.foundUser)
        );
        localStorage.setItem("token", response.payload.data.encodedToken);
        navigate(location?.state?.from?.pathname || "/homepage");
        toast.success("Successfully loged in");
      } else {
        toast.warn("user not found Need to signup first");
      }
    } else {
      toast.error("Fill all the filed");
    }
  };

  return (
    <Container maxW={"container.lg"} textAlign="center" py={20}>
      <Flex py={20} justifyContent="center">
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

          <Heading fontFamily="cursive">Login</Heading>

          <FormControl>
            <VStack spacing="2rem" p="2rem">
              <Input
                fontSize="1.5rem"
                placeholder="Enter your Username"
                size="lg"
                p="2rem"
                mb="4"
                value={username}
                onChange={(e) =>
                  setLoginuser({ ...loginuser, username: e.target.value })
                }
                borderColor="gray.400"
                required
              />
              <InputGroup size="lg">
                <Input
                  placeholder="Enter your password"
                  type={show ? "text" : "password"}
                  fontSize="1.5rem"
                  p="2rem"
                  borderColor="gray.400"
                  value={password}
                  onChange={(e) =>
                    setLoginuser({ ...loginuser, password: e.target.value })
                  }
                  required
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
                variant="outline"
                bg="transparent"
                borderColor="blue.400"
                color="blackAlpha.900"
                fontSize="1.5rem"
                _hover={{ bg: "whiteAlpha.600", color: "blackAlpha.900" }}
                _active={{ bg: "whiteAlpha.600", color: "blackAlpha.900" }}
                onClick={guestLoginHandler}
              >
                Guest Login
              </Button>
              <Button
                w="100%"
                p="1.5rem"
                bg="blue.600"
                variant="solid"
                fontSize="1.5rem"
                colorScheme="blue.600"
                type="submit"
                onClick={LoginHandler}
              >
                Login
              </Button>
              <Text fontSize="2xl">
                Not a user yet ?
                <NavLink to="/signup">
                  <strong style={{ borderBottom: "2px solid blue" }}>
                    Creat Account
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
