import React, { Component } from "react";
import { connect } from "react-redux";
import { handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  // function to handle search button click
  handleSearchClick = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleMovieSearch(searchText));
  };
  // function to handle change in input container
  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Navbar);
