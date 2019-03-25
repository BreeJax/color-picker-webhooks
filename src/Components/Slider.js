import React, { Component } from "react"

class Slider extends Component {
  render() {
    return <div className="Slider" className={this.props.special} >
        <div className={this.props.title}>
            <input name={this.props.title} type="range" min={this.props.min} max={this.props.max} value={this.props.value}/>
            </div>
    </div>
  }
}

export default Slider
