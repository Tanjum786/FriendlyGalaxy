import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  Input,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import {
  BsThreeDotsVertical,
  BsBookmark,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentspost,
  addToBookmark,
  deleteCommentpost,
  deletePost,
  dislikepost,
  likepost,
  removeBookmark,
} from "../../Redux/thunks";
import { toast } from "react-toastify";
import { useState } from "react";

export const PostCard = ({ onOpen, post, setEditpost }) => {
  const {
    firstName,
    lastName,
    content,
    likes,
    profile,
    username,
    _id,
    createdAt,
    comments,
  } = post;
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.auth);
  const { bookmarks } = useSelector((store) => store.post);
  const [commentData, setCommentData] = useState("");

  const likePostHandler = () => {
    dispatch(likepost({ token, _id }));
  };
  const liked = post?.likes.likedBy?.find((userLike) => userLike);
  const isBookmarked = bookmarks?.some(
    (bookmarkPost) => bookmarkPost._id === _id
  );
  const bookmarkHadler = () => {
    if (isBookmarked) {
      dispatch(removeBookmark({ token, _id }));
    } else {
      dispatch(addToBookmark({ token, _id }));
    }
  };
  const dislikePostHandler = () => {
    dispatch(dislikepost({ token, _id }));
  };

  const deletePostHandler = () => {
    dispatch(deletePost({ token, _id }));
    toast.success("post deleted");
  };
  const editPostHandler = () => {
    setEditpost(post);
    onOpen();
  };

  const addcommentHandler = () => {
    if (commentData.trim().length > 0) {
      dispatch(addCommentspost({ commentData, token, _id }));
      setCommentData("");
    }
  };
  
  const deleteCommnetPostHandler = (commentId) => {
    dispatch(deleteCommentpost({ _id, token, commentId }));
  };
  return (
    <Box bg="gray.200" borderRadius="0.5rem" p="1.5rem" w="60rem">
      <Flex justifyContent="space-between">
        <Flex gap="2rem">
          <Avatar
            name="avatar"
            size="xl"
            src={
              user.username === username
                ? !user.profile
                  ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                  : user.profile
                : !profile
                ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                : profile
            }
          />
          <Flex flexDirection="column" marginTop="1.4rem">
            <Heading as="h6" fontSize="1.5rem">
              {`${firstName} ${lastName}`}
            </Heading>
            <Text fontSize="xl" color="gray.600">
              @{username}
            </Text>
            <Text fontWeight="bold">{createdAt}</Text>
          </Flex>
        </Flex>
        {user.username === username ? (
          <Popover>
            <PopoverTrigger>
              <IconButton
                icon={<BsThreeDotsVertical />}
                fontSize="3xl"
                marginTop="1.5rem"
                bg="transparent"
                _focus={{ borderColor: "transparent" }}
              />
            </PopoverTrigger>
            <PopoverContent w="13rem">
              <PopoverCloseButton />
              <PopoverArrow />
              <PopoverBody>
                <Flex flexDirection="column" gap="1rem">
                  <Button
                    bg="transparent"
                    fontSize="2xl"
                    rightIcon={<FaEdit />}
                    onClick={editPostHandler}
                  >
                    Edit
                  </Button>
                  <Button
                    bg="transparent"
                    fontSize="2xl"
                    rightIcon={<MdDelete />}
                    onClick={deletePostHandler}
                  >
                    Delete
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>
      <Text p="0.5rem" fontSize="2rem">
        {content}
      </Text>
      <Flex gap="2rem">
        <Flex>
          <IconButton
            icon={
              !liked ? (
                <AiOutlineHeart onClick={likePostHandler} />
              ) : (
                <AiFillHeart color="red" onClick={dislikePostHandler} />
              )
            }
            fontSize="2rem"
            bg="transparent"
            borderRadius="50%"
            _hover={{ bg: "gray.200" }}
            _focus={{ border: "transparent" }}
          />

          <Text marginTop="0.4rem" fontSize="1.4rem" color="gray.500">
            {likes.likeCount} Likes
          </Text>
        </Flex>
        <Flex>
          <IconButton
            icon={!isBookmarked ? <BsBookmark /> : <BsFillBookmarkFill />}
            onClick={bookmarkHadler}
            fontSize="1.5rem"
            bg="transparent"
            borderRadius="50%"
            _hover={{ bg: "gray.200" }}
            _focus={{ border: "transparent" }}
          />
          <Text marginTop="0.4rem" fontSize="1.4rem" color="gray.500">
            BookMarked
          </Text>
        </Flex>
      </Flex>
      <Flex mt="1.5rem">
        <Avatar
          name="avatar"
          size="md"
          src={
            !user.profile
              ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
              : user.profile
          }
        />
        <InputGroup>
          <Input
            placeholder="write your comment"
            borderColor="gray.400"
            p="1.5rem"
            fontSize="1.5rem"
            marginLeft="1.5rem"
            value={commentData}
            onChange={(e) => setCommentData(e.target.value)}
          />
          <InputRightElement mr="2rem">
            <Button
              bg="transparent"
              variant="ghost"
              _hover={{ bg: "transparent" }}
              _focus={{ border: "none" }}
              _active={{ bg: "transparent" }}
              fontSize="1.5rem"
              color="blue.600"
              mt="0.5rem"
              onClick={addcommentHandler}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      {comments?.map(
        ({ firstName, lastName, profile, commentData, _id, username }) => {
          return (
            <Box key={_id}>
              <Flex justifyContent="space-between">
                <Flex mt="1.5rem">
                  <Avatar
                    name="avatar"
                    size="md"
                    src={
                      user.username === username
                        ? !user.profile
                          ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                          : user.profile
                        : !profile
                        ? "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"
                        : profile
                    }
                  />
                  <Flex flexDirection="column">
                    <Heading as="h2" fontSize="1rem" m="0.5rem">
                      {`${firstName} ${lastName}`}
                    </Heading>
                    <Text ml="1rem" fontSize="1.5rem" color="gray.600">
                      {commentData}
                    </Text>
                  </Flex>
                </Flex>
                {user.username === username ? (
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        icon={<BsThreeDotsVertical />}
                        fontSize="3xl"
                        marginTop="1.5rem"
                        bg="transparent"
                        _focus={{ borderColor: "transparent" }}
                      />
                    </PopoverTrigger>
                    <PopoverContent w="10rem">
                      <PopoverArrow />
                      <PopoverBody>
                        <Button
                          bg="transparent"
                          fontSize="2xl"
                          rightIcon={<MdDelete />}
                          onClick={() => deleteCommnetPostHandler(_id)}
                        >
                          Delete
                        </Button>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                ) : null}
              </Flex>
            </Box>
          );
        }
      )}
    </Box>
  );
};
