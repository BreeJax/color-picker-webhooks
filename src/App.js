import React, { Component } from "react"
import "./App.css"
import MainColor from "./Components/MainColor"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <MainColor />
      </div>
    )
  }
}

export default App
