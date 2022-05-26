import { Text, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import {
  PostCard,
  PostModal,
  ProfileEditModal,
  Sidebar,
  UserfollowedSidebar,
  UserProfile,
} from "../../Components";

export const Profile = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
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
          <PostCard onOpen={onOpen} />
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
