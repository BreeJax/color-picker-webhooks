import React, { Component } from "react"

class Slider extends Component {
  render() {
    return <div className="Slider" >
          <p>{this.props.title}</p>
        <input name={this.props.title} type="range" min="1" max="100" value="100"/>
    </div>
  }
}

export default Slider
