import { createAction } from '@reduxjs/toolkit'

// ================================ query actions
const queryRequest = createAction('queryFilm / getRequest')
const querySucces = createAction('queryFilm / getSucces')
const queryError = createAction('queryFilm / getError')

const queryByIdRequest = createAction('queryFilmById/getRequest')
const queryByIdSucces = createAction('queryFilmById/getSucces')
const queryByIdError = createAction('queryFilmById/getError')

const loadMoreRequest = createAction('loadMore/Request')
const loadMoreSucces = createAction('loadMore/Succes')
const loadMoreError = createAction('loadMore/Error')

const deleteFilm = createAction('favoriteFilm/delete')
const addFilm = createAction('favoriteFilm/add')

const actions = {
  queryRequest,
  querySucces,
  queryError,
  queryByIdRequest,
  queryByIdSucces,
  queryByIdError,
  deleteFilm,
  addFilm,
  loadMoreRequest,
  loadMoreSucces,
  loadMoreError,
}
export default actions
