import { connect, useSelector } from 'react-redux'
import selectors from '../Redux/selectors/selectors'
import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import styles from './queryFilmsList.module.scss'

const QueryFilmList = ({ handleClick, queryFilms, classes }) => {
  // console.log(queryFilms)
  const filmsCard = queryFilms.map(film => {
    return (
      <li className={styles.li} key={film.imdbID}>
        <Card className={classes.root}>
          <CardActionArea id={film.imdbID}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {film.Title}
              </Typography>
            </CardContent>
            <CardMedia
              className={classes.media}
              image={film.Poster}
              title={film.Title}
            />
          </CardActionArea>
        </Card>
      </li>
    )
  })

  const filmsList = queryFilms.length > 0 ? filmsCard : ''

  return (
    <ul className={styles.ul} onClick={handleClick}>
      {filmsList}
    </ul>
  )
}

export default connect()(QueryFilmList)
