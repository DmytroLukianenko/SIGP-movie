import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './components/Redux/store'
import QueryPage from './components/pages/queryPage/queryPage'
import DetailInfo from './components/pages/detailInfo/details'
import FavoriteFilms from './components/pages/favoriteFilms/favoriteFilms'

function App() {
  return (
    <>
      {/* <QueryPage /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={QueryPage} />
          <Route path="/details" component={DetailInfo} />
          <Route path="/favorite" component={FavoriteFilms} />
          {/* <Route path="/result" component={} /> */}
        </Switch>
      </Router>
    </>
  )
}

export default App
