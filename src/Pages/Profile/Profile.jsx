import { Text, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
  const [editPosts, setEditpost] = useState(null);

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
      <PostModal isOpen={isOpen} onClose={onClose} editPosts={editPosts} setEditpost={setEditpost}
       />
      <ProfileEditModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
        onOpenProfile={onOpenProfile}
      />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Flex flexDirection="column" gap="2rem" alignItems="center">
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
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
