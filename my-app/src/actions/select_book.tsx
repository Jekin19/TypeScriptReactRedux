import { Book } from '../types';
import * as constant from '../types/constants';

export interface SelectBook {
  type: constant.ActionTypes;
  payload: Book;
}

export function SelectBookAction(book: Book): SelectBook {
  return {
    type: constant.ActionTypes.BOOK_SELECTED,
    payload: book
  };
}
