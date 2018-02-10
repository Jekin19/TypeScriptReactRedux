import { BookStore } from '../types/index';

export default function(state: BookStore): BookStore {
  return {
    books: [
      { title: 'Java', page: 1},
      { title: 'C#', page: 2},
    ]
  };
}
