import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogsList from "./HogsList";
import HogTile from "./HogTile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogsList hogs={hogs} />
        <HelloWorld />
      </div>
    );
  }
}

export default App;
