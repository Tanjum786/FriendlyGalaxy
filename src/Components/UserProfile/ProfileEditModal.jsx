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
import { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile } from "../../Redux/thunks";

export const ProfileEditModal = ({
  isOpenProfile,
  onOpenProfile,
  onCloseProfile,
}) => {
  const { user, token } = useSelector((store) => store.auth);
  const [userData, setuserData] = useState({ ...user });
  const dispatch = useDispatch();
  const { profile, firstName, lastName, bio, link } = userData;

  const updateUserdata = () => {
    dispatch(editUserProfile({ userData, token }));
    onCloseProfile();
  };

  const imageChangeHandaler = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setuserData((data) => ({ ...data, profile: reader.result }));
        console.log(userData.firstName);
        localStorage.setItem("update-image", reader.result);
      }
    };
  };
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
              <Avatar name="avatar" size="2xl" src={profile} />
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
                    onChange={imageChangeHandaler}
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
                value={bio}
                onChange={(e) =>
                  setuserData({ ...userData, bio: e.target.value })
                }
              />
              <Text fontSize="2xl">Website</Text>
              <Input
                borderColor="blue.300"
                placeholder="https://portfolio-tanjum786.netlify.app/"
                fontSize="1.5rem"
                padding="2rem"
                value={link}
                onChange={(e) =>
                  setuserData({ ...userData, link: e.target.value })
                }
              />
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={updateUserdata} colorScheme="blue" mr="1rem">
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
