import React, { Component } from 'react';
import './Article.scss'

class Article extends Component {
  render() {
    return (
      <div className='article'>
        <p className='date'>2019-05-05</p>
        <h2 className='title'>{this.props.value}</h2>
        
      </div>
    );
  }
}

export default Article;