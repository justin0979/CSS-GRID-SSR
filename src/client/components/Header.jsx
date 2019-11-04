import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <p>Header</p>
        <Link to={'/users'}>See Users List</Link>
      </header>
    );
  }
}

export default Header;
