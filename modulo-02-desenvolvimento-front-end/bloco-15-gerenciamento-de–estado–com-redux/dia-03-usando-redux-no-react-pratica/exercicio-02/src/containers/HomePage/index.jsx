import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <Link to='/login'>Login</Link>
    )
  }
}

export default HomePage;
