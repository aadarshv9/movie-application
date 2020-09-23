// action types
export const MOVIE_SELECTED = "MOVIE_SELECTED";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const CLEAR_MOVIE_SELECTED = "CLEAR_MOVIE_SELECTED";

// action creators
export function movieSelected(selectedMovieInfo) {
  return {
    type: MOVIE_SELECTED,
    selectedMovieInfo,
  };
}

// function to handle movie search and add the result into the store
export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=94b6efe63acf88df156dcc578e5f1fa5&language=en-US&query=${searchText}&page=1&include_adult=false`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        // dispatch action to save search results in store
        dispatch(addMovieSearchResult(movie));
      });
  };
}

// function to handle movie selected and add the result into the store
export function handleMovieSelected(movie) {
  return function (dispatch) {
    const urlReview = `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=94b6efe63acf88df156dcc578e5f1fa5&language=en-US&page=1`;
    fetch(urlReview)
      .then((response) => response.json())
      .then((review) => {
        console.log("review response", review);
        // dispatch action to save selected movie in store
        dispatch(movieSelected({ movie, review }));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
