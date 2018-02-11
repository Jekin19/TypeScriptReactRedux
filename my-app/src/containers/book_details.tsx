import * as React from 'react';
import { BookStore, Book } from '../types';
import { connect } from 'react-redux';

interface BookDetail {
    book: Book;
}

class BookDetails extends React.Component<BookDetail> {

  render() {
    if (!this.props.book) {
       return null;
     }

    return (
         <div>
             <div> Title: {this.props.book.title} </div>
             <div> Pages: {this.props.book.page} </div>
         </div>
     );
   }
  }

function mapStateToProps(state: BookStore): BookDetail {
  return {
    book: state.activebookReducer
  };
}

export default connect(mapStateToProps)(BookDetails);
