import * as React from 'react';
import { BookStore, Book } from '../types';

const BookDetails = ({book}) => {
 if (!book) {
    return null;
  }

 return (
      <div>
          <div> Title: {book.title} </div>
          <div> Pages: {book.page} </div>
      </div>
  );
};

export default BookDetails;
