import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
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
  const [editPosts, setEditpost] = useState(null);

  const filterBookmarks = posts?.filter((eachpost) =>
    bookmarks?.find((eachBookmarkPost) => eachpost._id === eachBookmarkPost._id)
  );

  return (
    <>
      <PostModal isOpen={isOpen} onClose={onClose} editPosts={editPosts} setEditpost={setEditpost} />
      <Flex flexWrap="wrap" justifyContent="space-between" mr="2rem">
        <Sidebar onOpen={onOpen} />
        <Box>
          <Flex
            w="60rem"
            paddingTop="3rem"
            flexDirection="column"
            gap="2rem"
            alignItems="center"
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
              <Heading color="gray.500">
                Post are not added to Bookmark yet
              </Heading>
            )}
          </Flex>
        </Box>
        <UserfollowedSidebar />
      </Flex>
    </>
  );
};
