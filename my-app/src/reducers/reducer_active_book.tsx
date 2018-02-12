import { BookStore, Book } from '../types/index';
import { SelectBook } from '../actions/select_book';
import * as constant from '../types/constants';

export default function(state: Book= null, action: SelectBook): Book {
  switch (action.type) {
    case constant.ActionTypes.BOOK_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
