import React, { Component } from 'react';
import axios from 'axios'
import './Main.scss' 

import Article from '../Article/Article.js'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: null
    }
  }
  componentWillMount(){
    axios.get('/article/article_list/')
    .then(res=>{  
      this.setState({
        articles: res.data.articles
      })
    })
  }
  render() {
    const articles = this.state.articles;
    return (
      <div className='m-main'>
        <div className="articles">
          {
            articles ? articles.map((item, index) => {
              return <Article article={item} key={index}></Article>
            }) : null
          }
        </div>
      </div>
    );
  }
}

export default Main;