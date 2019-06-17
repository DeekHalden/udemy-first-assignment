import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";

import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Deek"
  };

  setUsername = username => {
    this.setState({ username });
  };
  render() {
    return (
      <div className="App">
        <UserInput handleInput={this.setUsername} value={this.state.username} />
        <div className="user__output">
          <UserOutput text={this.state.username} />
          <UserOutput text="dummy text" />
        </div>
      </div>
    );
  }
}

export default App;
