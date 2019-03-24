import React, { Component } from "react"

class Slider extends Component {
  render() {
    return <div className="Slider" >
          <p>{this.props.title}</p>
        <input name={this.props.title} type="range" min={this.props.min} max={this.props.max} value={this.props.value}/>
    </div>
  }
}

export default Slider
