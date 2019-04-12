import React from 'react'
import '../../style/reset.css'
import './home.scss'
import Beta from '../../components/Beta/Beta'
import Main from '../../components/Main/Main'
import Nav from '../../components/Nav/Nav'



class Home extends React.Component{
  render(){
    return (
      <div>
        <Beta></Beta>
        <div className='m-alpha'>
          <Nav></Nav>
          <Main></Main>
        </div>
      </div>
    )
  }
}


export default Home;