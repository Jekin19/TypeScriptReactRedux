import * as React from 'react';

class SearchBar extends React.Component< any, any> {
  constructor(props: any) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term: string) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
