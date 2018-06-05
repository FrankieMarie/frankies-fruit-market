import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import Main from './components/Main'
import Cart from './components/Cart'
import SingleFruit from './components/SingleFruit'
import AddFruit from './components/AddFruit'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/cart" component={Cart} />
            <Route path="/fruit/:id" component={SingleFruit} />
            <Route path="/addfruit" component={AddFruit} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
