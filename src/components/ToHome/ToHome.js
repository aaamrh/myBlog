import React, { Component } from 'react';


class ToHome extends Component {
  componentWillMount(){
    console.log(this.props)
    this.props.history.push('/home')
  }
  render() {
    return (
      <div> </div>
    );
  }
}

export default ToHome;