import React from 'react'
import axios from 'axios'
import '../../style/reset.css'
import './home.scss'

import Beta from '../../components/Beta/Beta'
import Main from '../../components/Main/Main'
import Nav from '../../components/Nav/Nav'
import Tools from '../../components/Tools/Tools'
import '../../public'

class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      articles: null
    }
  }
  componentDidMount(){
    axios.get('/article/')
      .then(res=>{  
        console.log(res)
        this.setState({
          articles: res.data.articles
        })
      })
  }
  render(){
    return (
      <div>
        <Beta></Beta>
        <div className='m-alpha'>
          <Nav></Nav>
          <Main articles={this.state.articles}></Main>
          <Tools></Tools>
        </div>
      </div>
    )
  }
}


export default Home;