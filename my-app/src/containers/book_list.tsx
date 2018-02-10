import * as React from 'react';
import { BookStore, Book } from '../types';
import { connect } from 'react-redux';
import BookDetails from './book_details';

export interface Props {
  books: Book[];
  selectedBook: Book;
}

class BookList extends React.Component<Props, Props> {
constructor (props: Props) {
  super (props);
  this.state = {
    books: [],
    selectedBook: null
  };
}

  renderList() {
    return this.props.books.map((book) => {
    return(
      <li key={book.title} onClick={() => this.setState({selectedBook: book})}>
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
      <div>
      <h1>Simple React + Redux Example</h1>
        <ul>
          {this.renderList()}
        </ul>
        <BookDetails book={this.state.selectedBook}/>
      </div>
    );
  }
}

function mapStateToProps(state: BookStore ): Props {
  return {
    books: state.bookReducer,
    selectedBook: state.bookReducer[0]
  };
}

export default connect<Props, {}, Props>(mapStateToProps)(BookList);
