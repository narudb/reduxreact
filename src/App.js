import React, { Component } from "react";
import "./App.css";
import CounterContainer from "./CounterContainer";

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      light: "on",
    };
    this.onSwitch = this.onSwitch.bind(this);
  }

  onSwitch() {
    const { light } = this.state;
    this.setState({ light: light === "on" ? "off" : "on" });
  }*/
  render() {
    //const { light } = this.state;
    return (
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}

export default App;
