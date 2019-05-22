import React, { Component } from 'react';
import './Beta.scss';

import avator from '../../images/avator.jpg';

class Beta extends Component {
  componentDidMount(){
    let beta = document.getElementsByClassName('m-beta')[0];
    beta.style.height = document.documentElement.offsetHeight + 'px';
  }
  render() {
    return (
      <div className='m-beta'>
        <header>
          <img className='avator' src={avator} alt='头像' />
          <h3 className='name'>马三岁</h3>
          <p className='motto'>不懂的知识就努力去补充，这才是成长之道！</p>
        </header>
        <footer className='footer'>
          <p>
            <a href='#' className='about-me'>关于我</a>
          </p>
          <p>京ICP备19001238号</p>
        </footer>
      </div>
    );
  }
}

export default Beta

