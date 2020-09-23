import {
  MOVIE_SELECTED,
  ADD_SEARCH_RESULT,
  CLEAR_MOVIE_SELECTED,
} from "../actions";
import { combineReducers } from "redux";

const initialSearchState = {
  results: [],
};

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

export default combineReducers({
  searchList,
  movieSelected,
});
