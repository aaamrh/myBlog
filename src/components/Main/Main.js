import React, { Component } from 'react';
import './Main.scss' 

import Article from '../Article/Article.js'

class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const articles = this.props.articles;
    return (
      <div className='m-main'>
        <div className="articles">
          {
            articles ? articles.map((item, index) => {
              return <Article content={item.content} title={item.title} date={item.date} key={index}></Article>
                // return <div key={index}>{item}</div>
            }) : null
          }

          {/* <Article value='纯CSS实现吸顶效果' date='2015-10-22'></Article> */}
          {/* <Article value='转载--雅虎35条优化黄金守则' date='2018-01-19'></Article> */}
        </div>
      </div>
    );
  }
}

export default Main;