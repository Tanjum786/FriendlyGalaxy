import {
  Avatar,
  Box,
  Button,
  Center,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useSelector } from "react-redux";

export const ProfileEditModal = ({
  isOpenProfile,
  onOpenProfile,
  onCloseProfile,
}) => {
  const {user}=useSelector((store)=>store.auth)
  const {profile,firstName,lastName}=user
  return (
    <>
      <Modal
        isOpen={isOpenProfile}
        onOpen={onOpenProfile}
        onClose={onCloseProfile}
      >
        <ModalOverlay />
        <ModalContent maxW="50rem">
          <ModalHeader fontSize="2rem">Edit Your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center position="relative">
              <Avatar
                name="avatar"
                size="2xl"
                src={!profile?"https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg":profile}
              />
              <Box
                position="absolute"
                right="18rem"
                bottom="0rem"
                bg="white"
                borderRadius="full"
                w="3rem"
                h="3rem"
              >
                <FormLabel cursor="pointer">
                  <Input
                    type="file"
                    accept="image/*"
                    name="image"
                    visibility="hidden"
                  />
                  <Box position="absolute" top="0.5rem" left="0.2rem">
                    <AiFillCamera fontSize="2rem" color="gray" />
                  </Box>
                </FormLabel>
              </Box>
            </Center>
            <Heading color="gray.500">{`${firstName} ${lastName}`}</Heading>
            <Flex flexDirection="column" gap="1rem">
              <Text fontSize="2xl">Bio:</Text>
              <Textarea
                fontSize="1.5rem"
                resize="none"
                borderColor="blue.300"
              />
              <Text fontSize="2xl">Website</Text>
              <Input
                borderColor="blue.300"
                placeholder="https://portfolio-tanjum786.netlify.app/"
                fontSize="1.5rem"
                padding="2rem"
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onCloseProfile}
              colorScheme="blue"
              mr="1rem"
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
