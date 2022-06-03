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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createPost, editPost } from "../../Redux/thunks";

export const PostModal = ({ isOpen, onClose, editPosts }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [postData, setpostData] = useState("");
  useEffect(() => {
    setpostData(editPosts?.content);
  }, [editPosts]);

  const postHandler = () => {
    if (editPosts) {
      const postDetailes = {
        _id: editPosts._id,
      };
      console.log(postDetailes._id);
      dispatch(editPost({ postDetailes,postData,token }));
      setpostData('')
      toast.success("post edit successfully.")
      onClose()
    } else {
      if (postData) {
        if (postData.trim().length > 0) {
          dispatch(createPost({ postData, token }));
          setpostData({...postData,content:""});
          onClose();
          toast.success("Post created successfully")
        } else {
          toast.info("Post Can't be blank");
        }
      }
    }
  };
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
            value={postData}
            onChange={(e) => setpostData(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            bg="blue.600"
            colorScheme="blue.600"
            fontSize="2xl"
            onClick={postHandler}
          >
            Post
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
