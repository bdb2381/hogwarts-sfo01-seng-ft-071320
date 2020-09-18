import React, { Component } from "react";

class HogTile extends React.Component {
  state = {
    showDetails: false,
    someOtherState: [],
  };

  // pigName = this.props.hogDetails.name.toLowerCase().split(" ").join("_");

  // pigImage = require(`../hog-imgs/${this.pigName}.jpg`);

  handleClick = () => {
    this.setState((prev) => ({
      showDetails: !prev.showDetails,
    }));
  };

  render() {
    const { hogDetails } = this.props;
    const pigName = hogDetails.name.toLowerCase().split(" ").join("_");

    const pigImage = require(`../hog-imgs/${pigName}.jpg`);

    return (
      <div>
        <div onClick={this.handleClick}>
          <div>{hogDetails.name}</div>
          <img src={pigImage} />
        </div>
        {/* details */}
        {this.state.showDetails && (
          <div>
            <ul>Specialty: {hogDetails.specialty}</ul>
            <ul>Greased: {hogDetails.greased}</ul>
            <ul>Weight: {hogDetails.weight}</ul>
            <ul>
              Highest Medal Achieved: {hogDetails["highest medal achieved"]}
            </ul>
          </div>
        )}
      </div>
    );
  } // end render
} // end class

export default HogTile;

//  name: 'Porkchop',
//     specialty: 'Making friends',
//     greased: true,
//    weight: 1.6,
// 'highest medal achieved': 'silver'// // //
