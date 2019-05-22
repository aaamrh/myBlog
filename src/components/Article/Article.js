import React, { Component } from 'react';
import './Article.scss'

class Article extends Component {
  render() {
    return (
      <div className='article'>
        <p className='article-date'>{this.props.date}</p>
        <h2 className='article-title'>{this.props.value}</h2>
        <div className='breaf-content'>在CSS中，z-index会影响元素的层叠关系。当然，这是有前提，最常用的就是设置元素的position值为relative/absolute/fixed。不过，这篇文章不是来介绍这些的，而是介绍一下影响z-index生效的其他CSS属性著作权归作者所有。</div>
        
        <div className='article-data'>
          <span className='click'>阅读量 328 </span>
          <a className='read' href="#">阅读全文</a>
        </div>
      </div>
    );
  }
}

export default Article;