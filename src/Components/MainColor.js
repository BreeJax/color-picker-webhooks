import React, { Component } from "react"

// let mainColorForBox = {
//   backgroundColor: "green"
// }

class MainColor extends Component {
  render() {
    return <div className="MainColorBox">
      <div className="FinalColor" style={{backgroundColor:this.props.MainColor}} />
    </div>
  }
}

export default MainColor

// const divStyle = {           FinalColor
//   margin: '40px',
//   border: '5px solid pink'
// };
// const pStyle = {
//   fontSize: '15px',
//   textAlign: 'center'
// };
//
// const Box = () => (
//   <div style={divStyle}>
//     <p ={pStyle}>Get started with inline style</p>
//   </div>
// );
