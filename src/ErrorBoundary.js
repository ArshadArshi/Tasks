import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props){
    super(props);
    this.state = {error:null}
  }
  componentDidCatch (error)  {
    this.setState({
      error : error
    })
  }
  render() {
    if(this.state.error){
    return (
      <div className='App'>
          <div class='error'>
            <h4> Oops...Something went wrong 💥💥💥 </h4>
            <p style={{ fontSize: '15px' }}>Please contact admin for more information</p>
          </div>
        </div>
    )
    }
    return (
      this.props.children
    )
  }
}
