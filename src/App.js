import React, { Component } from 'react'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Listen from './Components/Listen'
import Contact from './Components/Contact'
import TV from './Components/TV'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
         <Switch>
           <Route exact path="/listen" component= {Listen}/>
           <Route exact path="/contact" component= {Contact}  />
         </Switch>
      </div>
    </Router>
    )
  }
}



export default App;
