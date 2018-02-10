import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gridsample">AG Grid</Link></li>
                <li><Link to="/youtubesample">Video Search</Link></li>
                <li><Link to="/reduxsample">Redux</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
          </div>
        </nav>
      );
    }
  }

export default Header;
