import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {
  PostCard,
  PostModal,
  Sidebar,
  UserfollowedSidebar,
} from "../../Components";

export const BookMark = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { bookmarks, posts } = useSelector((store) => store.post);

  const filterBookmarks = posts?.filter((eachpost) =>
    bookmarks?.find((eachBookmarkPost) => eachpost._id === eachBookmarkPost._id)
  );

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Flex
          w="45%"
          paddingTop="3rem"
          flexDirection="column"
          gap="2rem"
          alignItems="center"
        >
          {filterBookmarks.length !== 0 ? (
            filterBookmarks.map((bookmarkPost) => {
              return (
                <PostCard
                  onOpen={onOpen}
                  post={bookmarkPost}
                  key={bookmarkPost._id}
                />
              );
            })
          ) : (
            <Heading color="gray.500">
              Post are not added to Bookmark yet
            </Heading>
          )}
        </Flex>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
