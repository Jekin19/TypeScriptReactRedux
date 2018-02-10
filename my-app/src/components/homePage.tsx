import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>React + Redux + TypeScript</h1>
        <p>React, React Router, and Redux for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default Home;
