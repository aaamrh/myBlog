import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './OptionNav.scss'


class OptionNav extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div className='opt-nav'>
        <Link className='opt' to='/admin/publish'>发布文章</Link>
        <Link className='opt' to='/admin/addtype'>添加分类</Link>
      </div>
    );
  }
}

export default OptionNav;