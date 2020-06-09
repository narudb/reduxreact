import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});
class CounterContainer extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div id="count">
        <p id="render-store">{counter}</p>
        <button onClick={() => dispatch({ type: "ADD" })}>+1</button>
        <button onClick={() => dispatch({ type: "REMOVE" })}>-1</button>
        <button onClick={() => dispatch({ type: "ADDTEN" })}>+10</button>
        <button onClick={() => dispatch({ type: "REMOVETEN" })}>-10</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CounterContainer);
