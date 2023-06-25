import React, { Component } from 'react'

export default class DisplayMessage extends Component {
  render() {
    return (
      <div>
        <p>{this.props.showMessage}</p>
      </div>
    )
  }
}
