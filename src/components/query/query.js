import { Button } from '@material-ui/core'
import getQueryFilm, {
  getFilmById,
  loadMore,
} from '../Redux/operations/operations'
import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import selectors from '../Redux/selectors/selectors'
import { makeStyles } from '@material-ui/core/styles'
import styles from './query.module.scss'
import QueryFilmList from '../queryFilmsList/queryFilmsList'
import QueryDropList from '../queryDropList/queryDropList'

const useStyles = makeStyles({
  root: {},
  media: {
    height: 650,
  },
})

const Query = () => {
  const queryFilms = useSelector(selectors.queryFilms)
  const queryTitles = useSelector(selectors.queryTitles)
  const queryError = useSelector(selectors.queryError)
  const classes = useStyles()
  const history = useHistory()

  const [query, setQuery] = useState('')
  const [count, setCount] = useState(2)

  const dispatch = useDispatch('')

  const handleClick = e => {
    if (e.nativeEvent.srcElement.offsetParent.id) {
      dispatch(getFilmById(e.nativeEvent.srcElement.offsetParent.id))
      history.push('/details')
    } else return
  }

  // const loadMore = () => {
  //   setCount(count + 1)
  //   dispatch(loadMore(query, count))
  // }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(getQueryFilm(query))
    }, 250)
    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <>
      <form name="queryForm" className="container">
        <input
          list="films"
          type="search"
          placeholder="Search movies"
          onChange={e => {
            setQuery(e.target.value)
          }}
        ></input>
        <Button variant="contained" color="primary">
          Search
        </Button>
        <QueryDropList queryFilms={queryFilms} queryTitles={queryTitles} />
        {queryError && queryError !== 'Incorrect IMDb ID.' ? (
          <div>{queryError}</div>
        ) : (
          ''
        )}

        <section>
          <QueryFilmList
            queryFilms={queryFilms}
            classes={classes}
            styles={styles}
            handleClick={handleClick}
          />
        </section>
      </form>

      {/* <Button variant="contained" color="primary" onClick={loadMore}>
        {' '}
        load more
      </Button> */}
    </>
  )
}

export default connect()(Query)
