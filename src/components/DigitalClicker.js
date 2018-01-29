// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component {

  this.state = () => {
    timesClicked: 0
  }

  handleClick = () => {
    this.setState({timesClicked: this.state.timesClicked+1})
  }
  render() {
    return (
      <button onClick={this.handleClick}>Hello World</button>
    )
  }
}

export default DigitalClicker
