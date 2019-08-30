import React, { Component } from 'react';
import axios from 'axios';

import './ArticleInfo.scss'
import 'braft-editor/dist/output.css'

class ArticleInfo extends Component {
  constructor(props){
    super(props)
    this.state = {
      articleInfo: {},
      html:'',
      tag:[],
      title:'',
    }
  }
  componentWillMount(){
    axios.get('/article/article_content/', {
      params:{
        id : this.props.match.params.articleId
      }
    })
    .then(res=>{
      // let node = document.createElement('div');
      
      // node.innerHTML = '<div>'+res.data.data.html + '</div>';
      // res.data.data.html = node.children[0];
      
      this.setState({
        articleInfo: res.data
      })
    })  
  }

  render() {

    let articleInfo = {}
    let taglist = []

    if(this.state.articleInfo.data){
      articleInfo = this.state.articleInfo.data 
      taglist = articleInfo.tag.map( v => ({
        icon: require(`../../images/`+ v.toLowerCase() +'.png'),
        text: v
      }) )
    }else{
      articleInfo = {};
      taglist = []
    }

    return (
      <div className="article-content">
        {/* {[ articleInfo.html ]} */}  
        <h2 className="tit">
          {articleInfo.title}
          <div className="tags">
            {
              taglist.map(function (item, index) {
                return <div className="tag" key={index}>
                  <img className="icon" src={item.icon} alt='' />
                  <span className="text">{item.text}</span>
                </div>
              })
            }
          </div>
        </h2>

        <div className="info">
          <span className="author">作者：
            <span className="highlight-A">铁头马</span>
          </span>
          <span className="date">日期：
            <span className="highlight-A">{articleInfo.date}</span>
          </span>
          <span className="click">阅读：
            <span className="highlight-A">333</span>
          </span>
        </div>

        <div className="split-line"></div>

        <div className="braft-output-content" dangerouslySetInnerHTML = {{ __html: articleInfo.html }} />
      </div>
    );
  }
}

export default ArticleInfo;