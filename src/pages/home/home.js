import React from 'react'
import axios from 'axios'
import {Route, Router, Switch, withRouter} from 'react-router-dom'
import '../../style/reset.css'
import './home.scss'

import Beta from '../../components/Beta/Beta'
import Main from '../../components/Main/Main'
import Nav from '../../components/Nav/Nav'
import Tools from '../../components/Tools/Tools'
import ArticleInfo from '../../components/ArticleInfo/ArticleInfo';


import '../../public'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      articles: null
    }
  }
  componentDidMount(){
  
  }
  render(){
    return (
      <div>
        <Beta></Beta>
        <div className='m-alpha'>
          <Nav></Nav>
          <Switch>
            <Route path='/' exact={true} component={Main} ></Route>
            <Route path='/a' component={ArticleInfo} ></Route>
          </Switch>
          {/* <Main articles={this.state.articles}></Main> */}
          <Tools></Tools>
        </div>
      </div>
    )
  }
}


export default withRouter(Home);