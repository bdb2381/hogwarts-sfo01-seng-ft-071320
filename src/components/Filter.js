import React, { Component } from "react";

class Filter extends React.Component {
  handleChange = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    this.props.handleFilter(event.target.value);
  };

  render() {
    return (
      <div>
        <label for="cars">Choose an option:</label>

        <select onChange={this.handleChange} name="filter options" id="pigs">
          <option value="allPigs">See All Pigs</option>
          <option value="grease">Filter By Grease</option>
          <option value="name">Sort Alphabetically</option>
          <option value="highest medal achieved">
            Sort Highest Medal Achieved
          </option>
          <option value="weight">Sort Weight</option>
        </select>
      </div>
    ); //end return
  } //end render
} // end class

export default Filter;
