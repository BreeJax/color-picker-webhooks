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
  //   const getHSL = () => {
  //     return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
  //   }
  //
  //   updateTeam2ScoreSubtract = () => {
  // let newScoreNeg2 = this.state.team2Score - 1
  // this.setState({ team2Score: newScoreNeg2 })
 // }

  render() {
    return (
      <div className="App">
        <h1>TASTE THE RAINBOW</h1>
        <MainColor />
        <h2 onClick={this.getHSLA}>  {this.state.MainColor} </h2>
        <Slider title="Hue"/>
        <Slider title="Saturation"/>
        <Slider title="Light"/>
        <Slider title="Alpha"/>
      </div>
    )
  }
}

export default App
