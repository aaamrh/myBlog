import React, { Component } from 'react';
import './Article.scss'

class Article extends Component {
  render() {
    return (
      <div className='article'>
        <p className='article-date'>{this.props.date}</p>
        <h3 className='article-title'>{this.props.title}</h3>
        <div className='breaf-content'>{this.props.content}</div>
        
        <div className='article-data'>
          <span className='click'>阅读量 328 </span>
          <a className='read' href="#">阅读全文</a>
        </div>
      </div>
    );
  }
}

export default Article;