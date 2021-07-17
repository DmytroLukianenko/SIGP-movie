const filmTtitle = state => state.filmsReducer.queryFilms.Title
const filmYear = state => state.filmsReducer.queryFilms.filmYear
const filmImdbID = state => state.filmsReducer.queryFilms.imdbID
const filmType = state => state.filmsReducer.queryFilms.Type
const filmPoster = state => state.filmsReducer.queryFilms.Poster

const filmById = state => state.filmsReducer.filmById

const queryFilms = state => state.filmsReducer.queryFilms
const queryTitles = state => state.filmsReducer.queryTitles
const queryError = state => state.filmsReducer.error

const favoriteFilms = state => state.filmsReducer.myFilms

const selectors = {
  filmTtitle,
  filmYear,
  filmImdbID,
  filmType,
  filmPoster,
  queryFilms,
  queryError,
  filmById,
  favoriteFilms,
  queryTitles,
}

export default selectors
