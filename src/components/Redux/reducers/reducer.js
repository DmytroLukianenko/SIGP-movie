import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import actions from '../actions/actions'

const filmsInitialState = {
  // queryTitles: [],
  queryFilms: [],
  error: '',
  filmById: {},
  myFilms: [],
}

const filmsReducer = createReducer(
  { ...filmsInitialState },
  {
    // [actions.queryTitleSucces]: (state, { payload }) => ({
    //   queryTitles: payload.data.Search
    //     ? [...payload.data.Search.map(film => film.Title)]
    //     : '',
    // }),
    [actions.querySucces]: (state, { payload }) => ({
      ...state,

      queryFilms: payload.data.Search
        ? [...payload.data.Search]
        : [...state.queryFilms],
      error: payload.data.Error ? payload.data.Error : '',
    }),
    [actions.queryByIdSucces]: (state, { payload }) => ({
      ...state,
      filmById: payload.data,
    }),
    [actions.deleteFilm]: (state, { payload }) => ({
      ...state,
      myFilms: [...payload],
    }),
    [actions.addFilm]: (state, { payload }) => ({
      ...state,
      myFilms: [...payload],
    }),
    [actions.loadMoreSucces]: (state, { payload }) => ({
      ...state,
      queryFilms: [...state.queryFilms, ...payload.data.Search],
    }),
  }
)

export default combineReducers({
  filmsReducer,
})
