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

  random = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let h = getRandomInt(300);
    let s = getRandomInt(100);
    let l = getRandomInt(100);
    let a = Math.random().toFixed(2);
      this.setState({Hue: h, Saturation: s, Light: l, Alpha:a});
      this.getHSLA()
  }
    getHSLA = () => {
      let everChangingHSLA = `hsla(${this.state.Hue}, ${this.state.Saturation}%, ${this.state.Light}%, ${this.state.Alpha})`
         this.setState({ MainColor: everChangingHSLA })

    }

  updateHue = (value) => {
      this.setState({Hue: value})
    this.getHSLA()

  }

  updateSaturation = (value) => {
      this.setState({Saturation: value})
    this.getHSLA()

  }

  updateLight = (value) => {
      this.setState({Light: value})
    this.getHSLA()

  }

  updateAlpha = (value) => {
      this.setState({Alpha: value})
    this.getHSLA()

  }

  render() {
    return (
      <div className="App">
        <h1>TASTE THE RAINBOW</h1>
        <MainColor MainColor={this.state.MainColor}/>
        <h2>  {this.state.MainColor} </h2>
        <button onClick={this.random}>random!</button>
        <form>
          <p>HUE</p>
          <Slider title="Hue" min="0" max="300" value={this.state.Hue} step="1" handleChange={(value) => this.updateHue(value) }/>
          <p>SATURATION</p>
          <Slider title="Saturation" min="0" max="100" value={this.state.Saturation} step="1" handleChange={(value) => this.updateSaturation(value) }/>
          <p>LIGHT</p>
          <Slider title="Light" min="0" max="100" value={this.state.Light} step="1" handleChange={(value) => this.updateLight(value) }/>
          <p>ALPHA</p>
          <Slider title="Alpha" min="0" max="1" value={this.state.Alpha} step="0.01" special="alphaImage" handleChange={(value) => this.updateAlpha(value) }/>
        </form>
      </div>
    )
  }
}



export default App
