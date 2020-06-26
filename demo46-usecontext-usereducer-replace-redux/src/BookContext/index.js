import React from 'react';
import { withApollo } from 'react-apollo';

const BooksContext = React.createContext([]);

const BooksProvider = ({ client }) => {
  /**
   * Data can comes from graphql
   */
  const [books, setBooks] = React.useState([]);

  const getBooks = () => {
    client
      .query({ query: GET_BOOKS })
      .then((result) => {
        setBooks({ ...result.books });
      })
      .catch(() => {
        throw new Error('Could not fetch books');
      });
  };

  React.useEffect(() => {
    getBooks();
  }, []);

  return <BooksContext.Provider value={books}></BooksContext.Provider>;
};

const BooksProviderWithApollo = withApollo(BooksProvider);

export { BooksProviderWithApollo as BooksProvider };

export const useBooks = () => {
  return React.useContext(BooksContext);
};
