import { BookStore, Book } from '../types/index';

export default function(state: BookStore): Book[] {
  return  [
      { title: 'Java', page: 1},
      { title: 'C#', page: 2},
      { title: 'React', page: 3},
    ];
}
