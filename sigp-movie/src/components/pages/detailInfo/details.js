import { StylesContext, makeStyles } from '@material-ui/styles'
import { connect, useDispatch, useSelector } from 'react-redux'
import selectors from '../../Redux/selectors/selectors'
import styles from '../detailInfo/details.module.scss'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import Header from '../../header/header'
import actions from '../../Redux/actions/actions'

const DetailInfo = () => {
  const dispatch = useDispatch()

  const queryFilms = useSelector(selectors.queryFilms)
  const filmById = useSelector(selectors.filmById)

  // useEffect(() => {
  //   return () => {}
  // }, [input])

  console.log(filmById)
  const filtered = (({ Ratings, Poster, Response, imdbID, ...rest }) => rest)(
    filmById
  )

  const handleClick = e => {
    const movies = JSON.parse(localStorage.getItem('myFilms') || '[]')
    const movieValue = movies.map(item => item.imdbID)
    if (movieValue.includes(filmById.imdbID)) {
      localStorage.setItem('myFilms', JSON.stringify(movies))
    } else {
      const allFilms = movies.concat(filmById)
      localStorage.setItem('myFilms', JSON.stringify(allFilms))
      e.target.style.fill = '#F5BD1E'
      dispatch(actions.addFilm(allFilms))
    }
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className={styles.wrapper}>
          <img src={filmById.Poster} className={styles.img}></img>
          <ul className={styles.ul}>
            {filmById &&
              Object.keys(filtered).map((oneKey, i) => {
                return (
                  <li key={i} className={styles.li}>
                    <h3>{oneKey}:</h3>
                    <p>{filtered[oneKey]}</p>
                  </li>
                )
              })}
          </ul>
          <StarBorderIcon
            style={{ fontSize: 100 }}
            focusable={true}
            color="action"
            onClick={handleClick}
          />
        </div>
      </section>
    </>
  )
}
export default connect()(DetailInfo)
