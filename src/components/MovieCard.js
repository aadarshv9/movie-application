import React from "react";
import { connect } from "react-redux";
import { handleMovieSelected } from "../actions";

class MovieCard extends React.Component {
  handleClick = () => {
    const { movie } = this.props;
    this.props.dispatch(handleMovieSelected(movie));
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movieCard" onClick={this.handleClick}>
        <div className="left">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt="movie-pic"
          />
        </div>
        <div className="right">
          <div className="title">{movie.title}</div>
          <div className="released">{movie.release_date}</div>
          <div className="plot">{movie.overview}</div>
          <div className="footer">
            <div className="rating">{movie.vote_average}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(MovieCard);
