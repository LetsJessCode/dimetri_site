import React, { Component } from 'react'
import About from './Components/About'
import NavBar from './Components/NavBar'
import Listen from './Components/Listen'
import Contact from './Components/Contact'
import TV from './Components/TV'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <About
          title="Bio"
          subtitle={About}
          dark={true}
          id="about"
        />
        <TV
          title="TV/Film"
          subtitle={TV}
          dark={false}
          id="film"
        />
         <Listen
          title="Section 3"
          subtitle={Listen}
          dark={true}
          id="section3"
        />
        <Contact
          title="Section 4"
          subtitle={Contact}
          dark={false}
          id="section4"
        />
      </div>
    )
  }
}



export default App;
