import React from "react";
import { connect } from "react-redux";
import MovieSelected from "./MovieSelected";
import Navbar from "./Navbar";
import SearchResult from "./SearchResult";

class App extends React.Component {
  render() {
    const { movieSelected } = this.props;
    const isSelected = movieSelected.isSelected;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <SearchResult />
          {isSelected && <MovieSelected />}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ movieSelected }) {
  return {
    movieSelected,
  };
}

export default connect(mapStateToProps)(App);
