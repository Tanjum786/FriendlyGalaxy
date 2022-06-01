import { Text, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  PostCard,
  PostModal,
  ProfileEditModal,
  Sidebar,
  UserfollowedSidebar,
  UserProfile,
} from "../../Components";
import { getpost } from "../../Redux/thunks";

export const Profile = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const userPost = posts.filter(
    (userpost) => userpost.username === user.username
  );

  useEffect(() => {
    dispatch(getpost());
  });
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <ProfileEditModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
        onOpenProfile={onOpenProfile}
      />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Flex flexDirection="column" gap="2rem" alignItems="center">
          <UserProfile onOpenProfile={onOpenProfile} />
          {userPost.map((post) => {
            return <PostCard onOpen={onOpen} key={post._id} post={post} />;
          })}
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
