import { Avatar, Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAlluser } from "../../Redux/thunks";

export const UserfollowedSidebar = () => {
  const { users } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const allusers = users?.filter(
    (eachauser) => eachauser.username !== user.username
  );
  useEffect(() => {
    dispatch(getAlluser());
  }, []);

  return (
    <Box>
      <Flex
        bg="gray.200"
        flexDirection="column"
        position="sticky"
        top="3rem"
        borderRadius="1rem"
        bottom="0"
        gap="1rem"
        p="2rem"
        mt="3rem"
      >
        <Heading
          fontSize="2rem"
          borderBottomColor="blue.300"
          p="3"
          borderBottom="1px"
          textAlign="center"
        >
          Who to Follow?
        </Heading>
        {allusers?.map(({ _id, lastName, firstName, profile, username }) => {
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
                <Avatar name="avatar" size="xl" src={profile} />
                <Flex flexDirection="column">
                  <Heading as="h6" fontSize="1.5rem">
                    {`${firstName} ${lastName}`}
                  </Heading>
                  <Text fontSize="xl" color="gray.600">
                    @{username}
                  </Text>
                </Flex>
                <Button
                  leftIcon={<BiPlus fontSize="2rem" color="whiteAlpha.800" />}
                  fontSize="2xl"
                  p="1rem"
                  bg="blue.600"
                  fontWeight="bold"
                  colorScheme="blue"
                >
                  Follow
                </Button>
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
