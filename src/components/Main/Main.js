import React, { Component } from 'react';
import './Main.scss' 

import Article from '../Article/Article.js'

class Main extends Component {
  render() {
    const num = 10;
    return (
      <div className='m-main'>
        <div className="articles">
          <Article value='123'></Article>
          <Article value='456'></Article>
          <Article value='456'></Article>
          <Article value='456'></Article>
          <Article value='456'></Article>
          <Article value='456'></Article>
          <Article value='456'></Article>
        </div>
      </div>
    );
  }
}

export default Main;