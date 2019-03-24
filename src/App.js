import React, { Component } from "react"
import "./App.css"
import MainColor from "./Components/MainColor"
import Slider from "./Components/Slider"

// hsla(262, 100%, 90%, 0.75)
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Hue:262,
      Saturation:100,
      Light: 90,
      Alpha:0.75,
      MainColor: `hsla(0, 0%, 0%, 1)`
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
        <MainColor />
        <h2 onClick={this.getHSLA}>  {this.state.MainColor} </h2>
        <form>
          <Slider title="Hue" min="1" max="300" value="261"/>
          <Slider title="Saturation" min="1" max="100" value="55"/>
          <Slider title="Light" min="1" max="100" value="77" />
          <Slider title="Alpha" min="0" max="1" value="0.3" />
        </form>
      </div>
    )
  }
}



export default App
