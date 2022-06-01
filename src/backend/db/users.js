import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Tanjum",
    lastName: "Kadakol",
    username: "tanjum",
    password: "tanjum123",
    createdAt: 2022,
    updatedAt: formatDate(),
    bio: "I am Front-end developer",
    link: "https://portfolio-tanjum786.netlify.app/",
    profile:
      "https://i.pinimg.com/736x/b8/62/46/b86246346098341fb8b7c854ea90ab8f.jpg",
  },
  {
    _id: uuid(),
    username: "kentdodds",
    firstName: "Kent",
    lastName: "Dodds",
    password: "kent123",
    profile:
      "https://i.pinimg.com/originals/72/e7/98/72e7982f686ed5ff4ff4e2f9e2fa09db.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    bio: "I am Front-end developer",
    link: "https://portfolio-tanjum786.netlify.app/",
  },
  {
    _id: uuid(),
    username: "segunadebayo",
    firstName: "Segun",
    lastName: "Adebayo",
    password: "segun123",
    profile:
      "https://i.pinimg.com/originals/72/e7/98/72e7982f686ed5ff4ff4e2f9e2fa09db.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    bio: "I am Front-end developer",
    link: "https://portfolio-tanjum786.netlify.app/",
  },
  {
    _id: uuid(),
    username: "josefnwamba",
    firstName: "Josef",
    lastName: "Nwamba",
    password: "josef123",
    profile:
      "https://i.pinimg.com/originals/72/e7/98/72e7982f686ed5ff4ff4e2f9e2fa09db.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    bio: "I am Front-end developer",
    link: "https://portfolio-tanjum786.netlify.app/",
  },
  {
    _id: uuid(),
    username: "shiviSha",
    firstName: "Shivi",
    lastName: "Sha",
    password: "shivi123",
    profile:
      "https://i.pinimg.com/originals/72/e7/98/72e7982f686ed5ff4ff4e2f9e2fa09db.jpg",
    createdAt: 2021,
    updatedAt: formatDate(),
    bio: "I am Front-end developer",
    link: "https://portfolio-tanjum786.netlify.app/",
  },
];
