import { allBooks, imageUrl } from "./book";

const resolvers = {
  Book: {
    imageUrl: (book, {size}) => {
      return imageUrl(size, book.googleId);
    },
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
