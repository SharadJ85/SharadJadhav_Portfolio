import React, { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super()
    this.state = ({
      message: "Welcome Sharad!!"
    });
  }
  changeMsg() {
    this.setState ({
      message: "thank you for subscribing!"
    });
  }

  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={() => this.changeMsg()}> Subscribe</button>
      </div>
    //   use <button onClick={() => this.changeMsg()}> Subscribe</button>
    //   or  <button onClick={this.changeMsg.bind(this)}> Subscribe</button> to bind eventhandlers
    );
  }
}
