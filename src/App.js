import React, { Component } from "react"
import "./App.css"
import MainColor from "./Components/MainColor"
import Slider from "./Components/Slider"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Hue:262,
      Saturation:100,
      Light: 90,
      Alpha:0.75,
      MainColor: `hsla(262, 100%, 90%, 0.75)`
    }
  }
    getHSLA = () => {
      console.log("here");
      let everChangingHSLA = `hsla(${this.state.Hue}, ${this.state.Saturation}%, ${this.state.Light}%, ${this.state.Alpha})`
         this.setState({ MainColor: everChangingHSLA })
    }


  render() {
    return (
      <div className="App">
        <h1>TASTE THE RAINBOW</h1>
        <MainColor MainColor={this.state.MainColor}/>
        <h2 onClick={this.getHSLA}>  {this.state.MainColor} </h2>
        <form>
          <p>HUE</p>
          <Slider title="Hue" min="1" max="300" value="261"/>
          <p>SATURATION</p>
          <Slider title="Saturation" min="1" max="100" value="55"/>
          <p>LIGHT</p>
          <Slider title="Light" min="1" max="100" value="77" />
          <p>ALPHA</p>
          <Slider title="Alpha" min="0" max="1" value="0.3" special="alphaImage"/>
        </form>
      </div>
    )
  }
}



export default App
