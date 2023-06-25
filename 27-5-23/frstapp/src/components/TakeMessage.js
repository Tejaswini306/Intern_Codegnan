import React, { Component } from 'react'

export default class TakeMessage extends Component {
    state={
        newMessage:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        this.props.onSubmit({
            text:this.state.newMessage
        })
        this.setState({
            newMessage:""
        })
    }
  render() {
    return (
      <div>
        <input name="newMessage" 
        value={this.state.newMessage}
        onChange={this.handleChange}
        placeholder='Enter a value'/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}
