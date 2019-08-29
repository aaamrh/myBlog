import React, { Component } from 'react';
import axios from 'axios';

class ArticleInfo extends Component {
  componentWillMount(){
    console.log(this.props)
    console.log( this.props.match.params.articleId)
    axios.get('/article/article_content/', {
      params:{
        id : this.props.match.params.articleId
      }
    })
    .then(res=>{
      console.log(res)
    })  
    console.log('------------------')
  }

  render() {
    return (
      <div>
        文章详情页
      </div>
    );
  }
}

export default ArticleInfo;