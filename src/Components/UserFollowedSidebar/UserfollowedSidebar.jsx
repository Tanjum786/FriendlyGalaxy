import { Avatar, Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Followuser, getAlluser, unFollowuser } from "../../Redux/thunks";

export const UserfollowedSidebar = ({ userData }) => {
  const { user, token } = useSelector((state) => state.auth);
  const { _id, lastName, firstName, profile, username } = userData;

  const dispatch = useDispatch();

  const isFollowing = userData.followers.some(
    (eachuser) => eachuser.username === user.username
  );

  const followUserHandler = (_id) => {
    dispatch(Followuser({ _id, token }));
  };

  return (
    <Box key={_id}>
      <Flex
        justify="space-between"
        alignItems="center"
        w="31.5rem"
        marginTop="2"
        p="1.5rem"
        borderRadius="1rem"
        backgroundColor="gray.300"
      >
        <Avatar
          name="avatar"
          size="xl"
          src={user.username === username ? user.profile : profile}
        />
        <Flex flexDirection="column">
          <Heading as="h6" fontSize="1.5rem">
            {`${firstName} ${lastName}`}
          </Heading>
          <Text fontSize="xl" color="gray.600">
            @{username}
          </Text>
        </Flex>
        {!isFollowing ? (
          <Button
            leftIcon={<BiPlus fontSize="2rem" color="whiteAlpha.800" />}
            fontSize="2xl"
            p="1rem"
            bg="blue.600"
            fontWeight="bold"
            colorScheme="blue"
            onClick={() => followUserHandler(_id)}
          >
            Follow
          </Button>
        ) : (
          <Button
            fontSize="2xl"
            p="1rem"
            bg="blue.600"
            fontWeight="bold"
            colorScheme="blue"
            onClick={() => dispatch(unFollowuser({ _id, token }))}
          >
            Following
          </Button>
        )}
      </Flex>
    </Box>
  );
};
