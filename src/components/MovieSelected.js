import React from "react";
import { connect } from "react-redux";

class MovieSelected extends React.Component {
  render() {
    const { movieSelected } = this.props;
    const movie = movieSelected.SelectedMovieInfo;
    const reviews = movie.review.results;
    return (
      <div id="movieSelected">
        <div className="left">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.movie.poster_path}
            alt="movie-pic"
          />
        </div>
        <div className="right">
          <h2 className="title">Title: {movie.movie.title}</h2>
          <h3 className="released">Released: {movie.movie.release_date}</h3>
          <div className="rating">Rating: {movie.movie.vote_average}</div>
        </div>
        <div className="plot">
          <p>
            <h1>Overview</h1>
            {movie.movie.overview}
          </p>
        </div>
        <div className="reviews">
          <h1>Reviews</h1>
          {reviews &&
            reviews.map((review) => (
              <div>
                <h3>{review.author}</h3>
                <h4>{review.content}</h4>
              </div>
            ))}
          {reviews && reviews.length === 0 ? (
            <div className="no-movies">No reviews to display! </div>
          ) : null}
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

export default connect(mapStateToProps)(MovieSelected);
