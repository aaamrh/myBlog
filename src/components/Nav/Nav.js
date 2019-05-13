import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss'

class Nav extends Component {
  render() {
    return (
      <div className="m-headnav">
        this is head nav
        <Link to='/navigation'>前端导航</Link>
      </div>
    );
  }
}

export default Nav;