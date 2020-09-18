import React, { Component } from "react";
import Filter from "./Filter";
import HogTile from "./HogTile";

class HogsList extends React.Component {
  state = {
    allHogs: [],
    displayHogs: [],
  };

  componentDidMount(props) {
    this.setState({
      allHogs: this.props.hogs,
      displayHogs: this.props.hogs,
    });
  }

  renderHogs = () => {
    return this.state.displayHogs.map((hog) => <HogTile hogDetails={hog} />);
  };

  handleFilter = (eventFilter) => {
    // let x = null;

    if (eventFilter === "grease") {
      let x = [];
      x = this.state.allHogs.filter((hog) => hog.greased === true);
      console.log(x);
      this.setState((prev) => ({ ...prev, displayHogs: x }));
      // console.log(this.state.displayHogs);
    } else if (eventFilter === "allPigs") {
      let x = this.state.allHogs;
      this.setState((prev) => ({ ...prev, displayHogs: x }));
    } else if (eventFilter === "weight") {
      let x = [];
      x = this.state.allHogs.sort((a, b) => a.weight - b.weight);
      this.setState((prev) => ({ ...prev, displayHogs: x }));
    }
    // } else if (eventFilter === "highest medal achieved") {
    //   x = this.state.allHogs.filter();
    //   this.setState((prev) => ({ ...prev, displayHogs: x }));
    // }
    else if (eventFilter === "name") {
      let x = [];

      x = this.state.allHogs.sort((a, b) => {
        console.log(a.name);
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      this.setState((prev) => ({ ...prev, displayHogs: x }));
    }
  };

  // objArray.sort((a, b) => a.DepartmentName.toLowerCase().localeCompare(b.DepartmentName.toLowerCase()))

  render() {
    return (
      <div>
        <div>
          <Filter handleFilter={this.handleFilter} />
        </div>
        <div>{this.state.displayHogs && this.renderHogs()}</div>
      </div>
    ); //end return
  } //end render
}

export default HogsList;
