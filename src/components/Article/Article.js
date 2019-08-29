import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './Article.scss' 


class Article extends Component {
  render() {
    const article = this.props.article;
    console.log(article)
    return (
      <div className='article'>
        <p className='article-date'>{article.date}</p>
        <h3 className='article-title'>{article.title}</h3>
        <div className='breaf-content'> 
          <p>{ article.content.substr(0, 150) }</p> 
        </div>
        
        <div className='article-data'>
          <span className='click'>阅读量 328 </span>
          <Link className='read' to={`/a/${article._id}`} target="_blank" >阅读全文</Link>
          {/* <Link className='read' to={{
            pathname: "/a/:id",
            search: `id=${article._id}`,
            // hash: "#the-hash",
            // state: { fromDashboard: true }
          }} target="_blank" >阅读全文</Link> */}
        </div>
      </div> 
    );
  }
}

export default withRouter(Article);