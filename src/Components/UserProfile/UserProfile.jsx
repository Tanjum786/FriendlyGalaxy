import {
  Flex,
  Avatar,
  Heading,
  Text,
  Button,
  IconButton,
  Tooltip,
  Link,
  Box,
} from "@chakra-ui/react";
import { MdOutlineLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../../Redux/Slices/AuthSlice";

export const UserProfile = ({ onOpenProfile }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("logout successfully");
  };
  return (
    <Flex
      w="100%"
      mt="2rem"
      p="2rem"
      flexDirection="column"
      gap="0.5rem"
      alignItems="center"
      bg="gray.300"
      zIndex="2"
      borderRadius="0.5rem"
    >
      <Avatar name="avatar" boxSize="15rem" src="https://bit.ly/dan-abramov" />
      <Heading as="h5">Adarsha Balika</Heading>
      <Text fontSize="2xl">@adarshabalika</Text>
      <Flex gap="0.5rem">
        <Button
          bg="blue.500"
          colorScheme="blue.600"
          fontSize="1.5rem"
          p="1.5rem"
          onClick={onOpenProfile}
        >
          Edit Profile
        </Button>
        <Tooltip label="Logout" fontSize="1.5rem">
          <IconButton
            icon={<MdOutlineLogout />}
            bg="red.400"
            fontSize="1.5rem"
            p="1.5rem"
            colorScheme="red.400"
            _focus={{ borderColor: "red.900" }}
            onClick={logoutHandler}
          />
        </Tooltip>
      </Flex>
      <Text fontSize="1.5rem">I am Front-end developer</Text>
      <Link
        href="https://portfolio-tanjum786.netlify.app/"
        isExternal
        color="blue.500"
        fontWeight="bold"
        fontSize="1.4rem"
      >
        https://portfolio-tanjum786.netlify.app/
      </Link>
      <Flex gap="2rem">
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h3" size="lg">
            0
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Followers
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h3" size="lg">
            0
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Posts
          </Text>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <Heading as="h3" size="lg">
            0
          </Heading>
          <Text fontSize="xl" fontWeight="bold">
            Following
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
