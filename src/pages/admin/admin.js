import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'

import '../../style/reset.css'
import './admin.scss'

import OptionNav from '../../components/OptionNav/OptionNav.js'
import PublishArticle from '../../components/Options/publish-article'
import Addtype from '../../components/Options/addtype'


class Admin extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  
  render() {
    return (
      <div>
        <OptionNav></OptionNav>

        <div className='opts-wrap'>
          <Switch>
            <Route path={`${this.props.match.url}`} exact={true} component={PublishArticle} ></Route>
            <Route path={`${this.props.match.url}/publish`} component={PublishArticle} ></Route>
            <Route path={`${this.props.match.url}/addtype`} component={Addtype} ></Route>
          </Switch>
        </div>
      
      </div>
    )
  }
}

export default Admin;