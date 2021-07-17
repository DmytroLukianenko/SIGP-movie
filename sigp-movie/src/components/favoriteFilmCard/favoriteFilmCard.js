import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './favoriteFilmCard.module.scss'
import actions from '../Redux/actions/actions'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import selectors from '../Redux/selectors/selectors'
import { getFilmById } from '../Redux/operations/operations'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.red,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const FavoriteFilmsCard = () => {
  const stateFilms = useSelector(selectors.favoriteFilms)
  const classes = useStyles()
  const dispatch = useDispatch('')
  const history = useHistory()
  const favoriteFilms = JSON.parse(localStorage.getItem('myFilms'))

  useEffect(() => {
    dispatch(actions.deleteFilm(favoriteFilms))
  }, [])

  const handleInfo = e => {
    dispatch(getFilmById(e.target.parentElement.id))

    history.push('/details')
  }

  const handleClick = e => {
    const newList = favoriteFilms.filter(item => item.imdbID !== e.target.id)
    dispatch(actions.deleteFilm(newList))
    localStorage.setItem('myFilms', JSON.stringify(newList))
  }
  const oneFilm = stateFilms.map(film => {
    return (
      <ListItem
        key={film.imdbID}
        id={film.imdbID}
        className={styles.listItem}
        onClick={handleInfo}
      >
        <ListItemText primary={film.Title} id={film.imdbID} />
        <ListItemSecondaryAction onClick={handleClick} id={film.imdbID}>
          <IconButton
            edge="end"
            aria-label="delete"
            id={film.imdbID}
            className={styles.noClick}
          >
            <DeleteIcon id={film.imdbID} className={styles.noClick} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  })

  return (
    <div display="block">
      <List className={(classes.demo, styles.filmList)}>{oneFilm}</List>
    </div>
  )
}
export default connect()(FavoriteFilmsCard)
