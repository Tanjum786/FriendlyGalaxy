import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FollowingSuggestions,
  MobileNavbar,
  PostCard,
  PostModal,
  Sidebar,
} from "../../Components";
import { MdOutlineLogout } from "react-icons/md";
import { getAlluser } from "../../Redux/thunks";
import { logoutUser } from "../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const BookMark = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { bookmarks, posts } = useSelector((store) => store.post);
  const [editPosts, setEditpost] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAlluser());
  }, []);

  const filterBookmarks = posts?.filter((eachpost) =>
    bookmarks?.find((eachBookmarkPost) => eachpost._id === eachBookmarkPost._id)
  );
  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate("/");
    toast.success("logout successfully");
  };

  return (
    <>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        editPosts={editPosts}
        setEditpost={setEditpost}
      />
      <Box
        position="sticky"
        top="0"
        zIndex="4"
        display={{ base: "flex", md: "none", lg: "none" }}
        flexDirection="row"
        width="100%"
        bg="gray.200"
        borderBottom="2px"
        justifyContent="space-between"
        borderBottomColor="blue.400"
      >
        <Heading
          fontSize={{ base: "6xl", md: "4.5xl", lg: "5xl" }}
          fontFamily="Crimson Text serif"
          color="blue.600"
          p="1.5rem"
        >
          FriendlyGalaxy
        </Heading>
        <IconButton
          icon={<MdOutlineLogout />}
          fontSize="4rem"
          p="1.5rem"
          bg="transparent"
          marginTop="2rem"
          _focus={{ borderColor: "red.900" }}
          onClick={logoutHandler}
        />
      </Box>
      <MobileNavbar onOpen={onOpen} />
      <Flex
        gap="2rem"
        mr={{ base: "2rem", md: "7rem" }}
        ml={{ base: "2rem", md: "0" }}
        justifyContent="center"
        overflow="hidden"
        direction={{ base: "column-reverse", md: "row", lg: "row" }}
      >
        <Sidebar onOpen={onOpen} />
        <Box>
          <Flex
            w={["100%", "100%", "60rem"]}
            padding="2rem 0 6rem 0"
            flexDirection="column"
            gap="2rem"
          >
            {filterBookmarks.length !== 0 ? (
              [...filterBookmarks].reverse().map((bookmarkPost) => {
                return (
                  <PostCard
                    onOpen={onOpen}
                    post={bookmarkPost}
                    key={bookmarkPost._id}
                    setEditpost={setEditpost}
                  />
                );
              })
            ) : (
              <Heading color="gray.500" textAlign="center">
                Post are not added to Bookmark yet
              </Heading>
            )}
          </Flex>
        </Box>
        <FollowingSuggestions />
      </Flex>
    </>
  );
};
