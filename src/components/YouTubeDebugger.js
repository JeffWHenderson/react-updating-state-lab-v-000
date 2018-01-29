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
    console.log("bitrate!")
  }

  handleResolutionClick = () => {
    console.log("resolution!")
  }

  render() {
    return (
      <button className="bitrate" onClick={handleBitrateClick}>Hello World</button>
      <button className="resolution" onClick={handleResolutionClick}>Hello World</button>
    )
  }
}

export default YouTubeDebugger
