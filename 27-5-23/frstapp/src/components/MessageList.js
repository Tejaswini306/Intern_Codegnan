import React, { Component } from 'react'
import TakeMessage from './TakeMessage'
import DisplayMessage from './DisplayMessage'
export default class MessageList extends Component {
    state={
        messageList:[]
    }
    addMessage=(s)=>{
        this.setState({
            messageList:[...this.state.messageList,s]
        })
    }
  render() {
    console.log("messagelistt",this.state.messageList)
    return (
      <div>
            <TakeMessage onSubmit={this.addMessage}/>
            {
                this.state.messageList.map((m)=>(
                    <DisplayMessage showMessage={m.text}/>
                ))
            }
      </div>
    )
  }
}
