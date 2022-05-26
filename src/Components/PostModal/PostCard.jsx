import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import { BsThreeDotsVertical, BsBookmark } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
export const PostCard = ({ onOpen }) => {
  return (
    <Box bg="gray.200" borderRadius="0.5rem" p="1.5rem">
      <Flex justifyContent="space-between">
        <Flex gap="2rem">
          <Avatar name="avatar" size="xl" src="https://bit.ly/dan-abramov" />
          <Flex flexDirection="column" marginTop="1.4rem">
            <Heading as="h6" fontSize="1.5rem">
              Adarsh Balika
            </Heading>
            <Text fontSize="xl" color="gray.600">
              @adarshbalika
            </Text>
            <Text fontWeight="bold">2020</Text>
          </Flex>
        </Flex>
        <Popover>
          <PopoverTrigger>
            <IconButton
              icon={<BsThreeDotsVertical />}
              fontSize="3xl"
              marginTop="1.5rem"
              bg="transparent"
              _focus={{ borderColor: "transparent" }}
            />
          </PopoverTrigger>
          <PopoverContent w="13rem">
            <PopoverCloseButton />
            <PopoverArrow />
            <PopoverBody>
              <Flex flexDirection="column" gap="1rem">
                <Button
                  bg="transparent"
                  fontSize="2xl"
                  rightIcon={<FaEdit />}
                  onClick={onOpen}
                >
                  Edit
                </Button>
                <Button
                  bg="transparent"
                  fontSize="2xl"
                  rightIcon={<MdDelete />}
                >
                  Delete
                </Button>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Text p="0.5rem" fontSize="2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati
        illum.
      </Text>
      <Flex gap="2rem">
        <Flex>
          <IconButton
            icon={<AiOutlineHeart />}
            fontSize="2rem"
            bg="transparent"
            borderRadius="50%"
            _hover={{ bg: "gray.200" }}
            _focus={{ border: "transparent" }}
          />

          <Text marginTop="0.4rem" fontSize="1.4rem" color="gray.500">
            1 Like
          </Text>
        </Flex>
        <Flex>
          <IconButton
            icon={<BsBookmark />}
            fontSize="1.5rem"
            bg="transparent"
            borderRadius="50%"
            _hover={{ bg: "gray.200" }}
            _focus={{ border: "transparent" }}
          />
          <Text marginTop="0.4rem" fontSize="1.4rem" color="gray.500">
            BookMarked
          </Text>
        </Flex>
      </Flex>
      <Flex mt="1.5rem">
        <Avatar name="avatar" size="md" src="https://bit.ly/dan-abramov" />
        <InputGroup>
          <Input
            placeholder="write your comment"
            borderColor="gray.400"
            p="1.5rem"
            fontSize="1.5rem"
            marginLeft="1.5rem"
          />
          <InputRightElement mr="2rem">
            <Button
              bg="transparent"
              variant="ghost"
              _hover={{bg:"transparent"}}
              _focus={{border:"none"}}
              _active={{ bg: "transparent" }}
              fontSize="1.5rem"
              color="blue.600"
              mt="0.5rem"
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Flex mt="1.5rem">
        <Avatar name="avatar" size="md" src="https://bit.ly/kent-c-dodds" />
        <Flex flexDirection="column">
          <Heading as="h2" fontSize="1rem" m="0.5rem">
            Jhon Kidd
          </Heading>
          <Text ml="1rem" fontSize="1.5rem" color="gray.600">
            Every Moment is fresh begning
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between">
        <Flex mt="1.5rem" >
          <Avatar name="avatar" size="md" src="https://bit.ly/ryan-florence" />
          <Flex flexDirection="column">
            <Heading as="h2" fontSize="1rem" m="0.5rem">
              Mr.User
            </Heading>
            <Text
              ml="1rem"
              fontSize="1.5rem"
              color="gray.600"
            >
              All is well
            </Text>
          </Flex>
        </Flex>
        <Popover>
          <PopoverTrigger>
            <IconButton
              icon={<BsThreeDotsVertical />}
              fontSize="3xl"
              marginTop="1.5rem"
              bg="transparent"
              _focus={{ borderColor: "transparent" }}
            />
          </PopoverTrigger>
          <PopoverContent w="10rem">
            <PopoverArrow />
            <PopoverBody>
              <Button bg="transparent" fontSize="2xl" rightIcon={<MdDelete />}>
                Delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};
