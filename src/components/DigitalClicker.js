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
      <p>Hello World</p>
    )
  }
}

export default DigitalClicker
