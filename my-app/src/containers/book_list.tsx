import * as React from 'react';
import { BookStore, Book } from '../types';
import { connect, Dispatch } from 'react-redux';
import BookDetails from './book_details';
import { bindActionCreators } from 'redux';
import { SelectBookAction } from '../actions/select_book';

interface ActionProp {
  selectedBook?: (book: Book) => void;
}

interface Prop {
books: Book[];
}

interface Props extends ActionProp, Prop {
}

class BookList extends React.Component<Props> {

  renderList() {
    return this.props.books.map((book) => {
    return(
      <li key={book.title} onClick={() => this.props.selectedBook(book)}>
        {book.title}
      </li>
      );
    });
  }

  render() {
    if (!this.props.books) {
      return (<div> No Books </div>);
    }
    return (
      <div>
      <h1>Simple React + Redux Example</h1>
        <ul>
          {this.renderList()}
        </ul>
        <BookDetails/>
      </div>
    );
  }
}

function mapStateToProps(state: BookStore ): Prop {
  return {
    books: state.bookReducer
  };
}

// Same as below 
// function mapDispatchToProps(dispatch ): ActionProp {
//    return bindActionCreators({selectedBook: SelectBookAction}, dispatch);
// }

function mapDispatchToProps(dispatch: Dispatch<ActionProp> ): ActionProp {
  return {
    selectedBook: book => dispatch(SelectBookAction(book))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
