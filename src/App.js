import "./styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  add = () => {
    this.props.dispatch({ type: "INCREMENT" });
    console.log(this);
  };

  subtract = () => {
    this.props.dispatch({ type: "DECREMENT" });
    console.log(this);
  };

  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        <button style={{ color: "blue" }} onClick={this.add}>
          increment
        </button>
        <span style={{ padding: "5px" }}>count is : {this.props.count}</span>
        <button style={{ color: "red" }} onClick={this.subtract}>
          decrement
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(App);
