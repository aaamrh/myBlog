import React from 'react'
import '../../style/reset.css'
import './home.scss'

import Beta from '../../components/Beta/Beta'
import Main from '../../components/Main/Main'
import Nav from '../../components/Nav/Nav'
import Tools from '../../components/Tools/Tools'
import '../../public'

class Home extends React.Component{
  
  render(){
    return (
      <div>
        <Beta></Beta>
        <div className='m-alpha'>
          <Nav></Nav>
          <Main></Main>
          <Tools></Tools>
        </div>
      </div>
    )
  }
}


export default Home;