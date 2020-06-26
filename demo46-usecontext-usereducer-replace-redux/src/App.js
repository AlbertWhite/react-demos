import React from 'react';
import { BooksProvider, useBooks } from './BookContext';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BooksProvider>
        <Books />
      </BooksProvider>
    </ApolloProvider>
  );
}

const Books = () => {
  const books = useBooks();
  return books.map((book) => <div>{book.name}</div>);
};

export default App;
