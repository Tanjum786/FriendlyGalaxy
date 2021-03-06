import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { UserfollowedSidebar } from "./UserfollowedSidebar";

export const FollowingSuggestions = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);

  const otherUsers = users?.filter(
    (eachUser) => eachUser?.username !== user?.username
  );

  return (
    <>
      <Box>
        <Flex
          bg="gray.200"
          flexDirection={{ base: "row", md: "column", lg: "column" }}
          overflow={{ base: "scroll", md: "auto", lg: "auto" }}
          position={{ base: "sticky", md: "fixed",lg:"" }}
          top="0"
          right="2rem"
          borderRadius="1rem"
          bottom="0"
          gap="1rem"
          p="2rem"
          mt="3rem"
          h={{base:"100%",md:"55rem",lg:"55rem"}}
        >
          <Heading
            fontSize="2.5rem"
            borderBottomColor="blue.300"
            p="3"
            borderBottom="1px"
            textAlign="center"
          >
            Who to Follow?
          </Heading>
          {otherUsers.map((userData) => {
            return (
              <UserfollowedSidebar key={userData._id} userData={userData} />
            );
          })}
        </Flex>
      </Box>
    </>
  );
};
