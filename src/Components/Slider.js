import React, { Component } from "react"

class Slider extends Component {
  render() {
    return <div className="Slider" className={this.props.special} >
        <div className={this.props.title}>
            <input
            name={this.props.title}
            onChange={(e) => {(this.props.handleChange(e.target.value))}}
            type="range" min={this.props.min}
            max={this.props.max} 
            value={this.props.value}
            step={this.props.step}/>
            </div>
    </div>
  }
}

export default Slider
