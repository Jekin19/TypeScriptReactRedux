import { BookStore, Book } from '../types/index';
import { SelectBook } from '../actions/select_book';

export default function(state: Book= null, action: SelectBook): Book {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
