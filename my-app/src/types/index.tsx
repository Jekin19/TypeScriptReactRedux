export interface Book {
  title: string;
  page: number;
}

export interface BookStore {
  bookReducer: Book[];
}
