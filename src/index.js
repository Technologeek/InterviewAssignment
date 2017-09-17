import 'bulma/css/bulma.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { NavBar } from './components/Navbar/NavBar'
import List from './containers/List'
import Favorites from './containers/Favorites'
import store from './stores'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path='/' component={List} />
              <Route path='/favorites' component={Favorites} />
              <Route render={() => {
                return <p>You're lost. This is how new Router Switch is suppose to work!</p>
              }} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, app)
module.hot.accept();