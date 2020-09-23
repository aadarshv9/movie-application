import {
  MOVIE_SELECTED,
  ADD_SEARCH_RESULT,
  CLEAR_MOVIE_SELECTED,
} from "../actions";
import { combineReducers } from "redux";

const initialSearchState = {
  results: [],
};

// reducer to handle the searchList state
export function searchList(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        results: action.movie.results,
      };
    default:
      return state;
  }
}

const initialMovieSelectedState = {
  SelectedMovieInfo: {},
  isSelected: false,
};

// reducer to handle the movieSelected state
export function movieSelected(state = initialMovieSelectedState, action) {
  switch (action.type) {
    case MOVIE_SELECTED:
      return {
        ...state,
        SelectedMovieInfo: action.selectedMovieInfo,
        isSelected: true,
      };
    case CLEAR_MOVIE_SELECTED:
      return {
        ...state,
        movieSelected: {},
        isSelected: false,
      };
    default:
      return state;
  }
}

// inbuilt combine reducer provided by redux to combine all reducers and this the final reducer i.e used by our redux store
export default combineReducers({
  searchList,
  movieSelected,
});
