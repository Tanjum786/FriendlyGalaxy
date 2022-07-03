import { Text, Flex, useDisclosure, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FollowingSuggestions,
  MobileNavbar,
  PostCard,
  PostModal,
  ProfileEditModal,
  Sidebar,
  UserProfile,
} from "../../Components";
import { getAlluser, getpost } from "../../Redux/thunks";

export const Profile = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [editPosts, setEditpost] = useState(null);

  const userPost = posts.filter(
    (userpost) => userpost.username === user.username
  );

  useEffect(() => {
    dispatch(getpost());
    dispatch(getAlluser());
  }, []);
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  return (
    <>
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        editPosts={editPosts}
        setEditpost={setEditpost}
      />
      <ProfileEditModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
        onOpenProfile={onOpenProfile}
      />
      <Flex
        position="sticky"
        top="0"
        zIndex="4"
        display={{ base: "block", md: "none", lg: "none" }}
      >
        <Heading
          fontSize={{ base: "6xl", md: "4.5xl", lg: "5xl" }}
          fontFamily="Crimson Text serif"
          color="blue.600"
          borderBottom="2px"
          p="1.5rem"
          width="100%"
          bg="gray.200"
          borderBottomColor="blue.400"
        >
          FriendlyGalaxy
        </Heading>
      </Flex>
      <MobileNavbar onOpen={onOpen} />
      <Flex
        gap="2rem"
        mr={{ base: "2rem", md: "7rem" }}
        ml={{ base: "2rem", md: "2rem" }}
        justifyContent="center"
        overflow="hidden"
        direction={{ base: "column-reverse", md: "row", lg: "row" }}
      >
        <Sidebar onOpen={onOpen} />
        <Flex
          w={["100%", "100%", "50%"]}
          padding="2rem 0 6rem 0"
          flexDirection="column"
          gap="2rem"
        >
          {" "}
          <UserProfile onOpenProfile={onOpenProfile} />
          {[...userPost].reverse().map((post) => {
            return (
              <PostCard
                onOpen={onOpen}
                key={post._id}
                post={post}
                setEditpost={setEditpost}
              />
            );
          })}
        </Flex>
        <FollowingSuggestions />
      </Flex>
    </>
  );
};
