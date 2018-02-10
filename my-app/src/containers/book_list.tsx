import * as React from 'react';
import { BookStore, Book } from '../types';
import { connect } from 'react-redux';

export interface Props {
  books: Book[];
}

class BookList extends React.Component<{books: Book[]}, {}> {
  renderList() {
    return this.props.books.map((book) => {
    return(
      <li key={book.title}>
        {book.title}
      </li>
      );
    });
  }

  render() {

    const p = this.props;
    if (!p) {
      return (<div> hello </div>);
    }
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

// function renderList(books: Book[]) {
//   return books.map((book) => {
//   return(
//     <li key={book.title}>
//       {book.title}
//     </li>
//     );
//   });
// }
//
// function render({books}: Props) {
//   return (
//     <ul>
//       {renderList(books)}
//     </ul>
//   );
// }

function mapStateToProps(state: BookStore): Props {
  return {books: state.books};
}

export default connect(mapStateToProps)(BookList);
