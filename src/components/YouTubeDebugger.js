// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
       errors: [],
       user: null,
       settings: {
         bitrate: 8,
         video: {
           resolution: '1080p'
         }
       }
    }
  }
  handleBitrateClick = () => {
    this.setState({...this.state.settings, bitrate: 12})
  }

  handleResolutionClick = () => {
    console.log("resolution!")
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateClick}>change bitrate</button>
        <button className="resolution" onClick={this.handleResolutionClick}>change resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
