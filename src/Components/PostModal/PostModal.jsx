import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

export const PostModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">Add Post</ModalHeader>
        <ModalCloseButton border="none" variant="none" />
        <ModalBody>
          <Textarea
            fontSize="2xl"
            placeholder="Write 
                        what you think"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            bg="blue.600"
            colorScheme="blue.600"
            fontSize="2xl"
          >
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
