import * as React from 'react';
import './App.css';
import BookList from './containers/book_list';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BookList />
      </div>
    );
  }
}

export default App;
