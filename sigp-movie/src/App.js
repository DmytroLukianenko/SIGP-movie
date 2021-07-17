import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QueryPage from './components/pages/queryPage/queryPage'
import DetailInfo from './components/pages/detailInfo/details'
import FavoriteFilms from './components/pages/favoriteFilms/favoriteFilms'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={QueryPage} />
          <Route path="/details" component={DetailInfo} />
          <Route path="/favorite" component={FavoriteFilms} />
        </Switch>
      </Router>
    </>
  )
}

export default App
