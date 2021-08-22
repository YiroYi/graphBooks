import { allBooks, imageUrl } from "./book";
import { authorsByBookId } from "./author";

const resolvers = {
  Book: {
    imageUrl: (book, {size}) => {
      return imageUrl(size, book.googleId);
    },
    authors: book => {
      return authorsByBookId(book.id);
    }
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
