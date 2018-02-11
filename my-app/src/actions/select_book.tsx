import { Book } from '../types';

export interface SelectBook {
  type: string;
  payload: Book;
}

export function SelectBookAction(book: Book): SelectBook {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
