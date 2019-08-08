import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss'

class Nav extends Component {

  render() {
    return (
      <div className="m-headnav">
        <Link className='nav active' to='/navigation'>最新</Link>
        <Link className='nav del' to='#'>前端笔记</Link>
        <Link className='nav del' to='#'>后端笔记</Link>
        <Link className='nav del' to='#'>移动笔记</Link>
        <Link className='nav del' to='#'>个人生活</Link>
        <Link className='nav' to='/navigation'>私藏的网站</Link>
      </div>
    );
  }
}

export default Nav;