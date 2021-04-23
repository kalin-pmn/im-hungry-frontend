import React from 'react'
import Home from './pages/Home'
import './App.css'
import RestaurantDetail from './pages/RestaurantDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/restaurant/:id">
            <RestaurantDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
