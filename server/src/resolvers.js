import { allBooks, imageUrl } from "./book";
import { authorsByBookId } from "./author";

const resolvers = {
  Book: {
    imageUrl: (book, {size}) => {
      return imageUrl(size, book.googleId);
    },
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return  findAuthorsByBookIdsLoader.load(book.id);
      //return authorsByBookId(book.id);
    }
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
