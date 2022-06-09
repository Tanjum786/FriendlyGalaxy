import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Pursue what catches your heart, not what catches your eyes",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "johnson",
    firstName: "John",
    lastName: "son",
    profile: "https://bit.ly/dan-abramov",
    createdAt: 2020,
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content: "Start each day with a positive thought and a grateful heart",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sonisharma",
    firstName: "Sania",
    lastName: "shaik",
    profile:
      "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX26712233.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Ravikumar",
        firstName: "Ravi",
        lastName: "Kumar",
        commentData: "You are perfect just the way you are.",
        profile:
          "https://i.pinimg.com/736x/25/08/38/2508381c43da208edbfa9b64956a5366.jpg",
        createdAt: 2002,
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "We are addicted to our thoughts. We cannot change anything if we cannot change our thinking..",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Ravikumar",
    firstName: "Ravi",
    lastName: "Kumar",
    profile:
      "https://i.pinimg.com/736x/25/08/38/2508381c43da208edbfa9b64956a5366.jpg",
    createdAt: 2002,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "segunadebayo",
        firstName: "Segun",
        lastName: "Adebayo",
        profile: "https://bit.ly/code-beast",
        createdAt: 2022,
        updatedAt: formatDate(),
        commentData: "You are perfect just the way you are.",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "I do my best thinking at night when everyone else is sleeping. No interruptions. No noise. I like the feeling of being awake when no one else is.",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shiviSha",
    firstName: "Shivi",
    lastName: "Sha",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUpXPhFj_GOReC0bkV7ZbkUR9FB7NnOyHgUSe_m9q7AyPZUmHqQfCPUYJy2grXOAHQ6tI&usqp=CAU",
    createdAt: 2022,
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "I seem to have run in a great circle, and met myself again on the starting line.",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "josefnwamba",
    firstName: "Josef",
    lastName: "Nwamba",
    profile:
      "https://i.pinimg.com/originals/72/e7/98/72e7982f686ed5ff4ff4e2f9e2fa09db.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "kentdodds",
        firstName: "Kent",
        lastName: "Dodds",
        profile: "https://bit.ly/tioluwani-kolawole",
        createdAt: 2021,
        updatedAt: formatDate(),
        commentData: "You are perfect just the way you are.",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "If someone does not want me it is not the end of the world. But if I do not want me, the world is nothing but endings",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "segunadebayo",
    firstName: "Segun",
    lastName: "Adebayo",
    profile: "https://bit.ly/code-beast",
    createdAt: 2022,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "danabrahmov",
        firstName: "Dan",
        lastName: "Abrahmov",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTRmS7ypBbiG70yI0lA9ngV4Yg0BxkGvnUeq4tAF6DLdzJ5MV7XTbIFPcDZk6T3VrA3U&usqp=CAU",
        createdAt: 2022,
        updatedAt: formatDate(),
        commentData: "You are an incredible human.",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The struggle you’re in today is developing the strength you need tomorrow",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kentdodds",
    firstName: "Kent",
    lastName: "Dodds",
    profile:
      "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "danabrahmov",
    firstName: "Dan",
    lastName: "Abrahmov",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTRmS7ypBbiG70yI0lA9ngV4Yg0BxkGvnUeq4tAF6DLdzJ5MV7XTbIFPcDZk6T3VrA3U&usqp=CAU",
    createdAt: 2022,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "samdukky",
        firstName: "Sam",
        lastName: "Dukky",
        profile:
          "https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg",
        createdAt: 2020,
        updatedAt: formatDate(),
        commentData: "You are an incredible human.",
      },
    ],
  },
  {
    _id: uuid(),
    content: "If opportunity doesn’t knock, build a door.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "samdukky",
    firstName: "Sam",
    lastName: "Dukky",
    profile:
      "https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg",
    createdAt: 2020,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "kushidatt",
        firstName: "Kushi",
        lastName: "Datt",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAQ4y16KfhH15x-BRF7snjCQTwknW3Mv4k5jBF4sf6ADqFkhner-yLnRsUJDkcI70vyY&usqp=CAU",
        createdAt: 2021,
        updatedAt: formatDate(),
        commentData: "You are an incredible human.",
      },
    ],
  },
  {
    _id: uuid(),
    content: "Live life to the fullest and focus on the positive.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kushidatt",
    firstName: "Kushi",
    lastName: "Datt",
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAQ4y16KfhH15x-BRF7snjCQTwknW3Mv4k5jBF4sf6ADqFkhner-yLnRsUJDkcI70vyY&usqp=CAU",
    createdAt: 2021,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "kartikroy",
        firstName: "Kartik",
        lastName: "Roy",
        profile:
          "https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg",
        createdAt: 2022,
        updatedAt: formatDate(),
        commentData: "You're someone's reason to smile.",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "A truly happy person is one who can enjoy the scenery while on a detour.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "kartikroy",
    firstName: "Kartik",
    lastName: "Roy",
    profile:
      "https://icon2.cleanpng.com/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg",
    createdAt: 2022,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "danabrahmov",
        firstName: "Dan",
        lastName: "Abrahmov",
        profile:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTRmS7ypBbiG70yI0lA9ngV4Yg0BxkGvnUeq4tAF6DLdzJ5MV7XTbIFPcDZk6T3VrA3U&usqp=CAU",
        createdAt: 2022,
        updatedAt: formatDate(),
        commentData: "You're someone's reason to smile.",
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "The struggle you’re in today is developing the strength you need tomorrow",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanjum",
    firstName: "Tanjum",
    lastName: "Kadakol",
    profile:
      "https://i.pinimg.com/736x/b8/62/46/b86246346098341fb8b7c854ea90ab8f.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "samdukky",
        firstName: "Sam",
        lastName: "Dukky",
        profile:
          "https://i.pinimg.com/474x/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f--avatar-maker.jpg",
        createdAt: 2020,
        updatedAt: formatDate(),
        commentData: "You are an incredible human.",
      },
    ],
  },
];
