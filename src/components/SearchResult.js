import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
class SearchResult extends React.Component {
  render() {
    const { searchList } = this.props;
    const moviesToDisplay = searchList.results;
    return (
      <div id="searchResult">
        {moviesToDisplay &&
          moviesToDisplay.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        {moviesToDisplay && moviesToDisplay.length === 0 ? (
          <div className="no-movies">No movies to display! </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ searchList }) {
  return {
    searchList,
  };
}

export default connect(mapStateToProps)(SearchResult);
