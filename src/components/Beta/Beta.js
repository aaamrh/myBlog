import React, { Component } from 'react';
import './Beta.scss'

class Beta extends Component {
  render() {
    return (
      <div>
        <header className='m-beta'>
          <img alt='头像' />
          <h3>马三岁</h3>
          <p>不懂的知识就努力去补充，这才是成长之道！</p>
        </header>
        <footer>
          <p>
            <a href='#'>关于我</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default Beta;

