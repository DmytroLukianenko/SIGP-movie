import axios from 'axios'
import actions from '../actions/actions'

const KEY = '93b8237d'
const URL = `http://omdbapi.com/?apikey=${KEY}`

const getQueryFilm = query => async dispatch => {
  dispatch(actions.queryRequest())
  try {
    const response = await axios.get(`${URL}&s=${query}`)
    dispatch(actions.querySucces(response))
  } catch (error) {
    dispatch(actions.queryError(error.message))
  }
}

export const getFilmById = id => async dispatch => {
  dispatch(actions.queryByIdRequest())
  try {
    const response = await axios.get(`${URL}&i=${id.toString()}`)
    dispatch(actions.queryByIdSucces(response))
  } catch (error) {
    dispatch(actions.queryByIdError(error.message))
  }
}

export const loadMore = (query, count) => async dispatch => {
  dispatch(actions.loadMoreRequest())
  try {
    const response = await axios.get(
      `${URL}&s=${query}&page=${count.toString()}`
    )
    dispatch(actions.loadMoreSucces(response))
  } catch (error) {
    dispatch(actions.loadMoreError(error.message))
  }
}

export default getQueryFilm
