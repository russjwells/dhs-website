import React, { Component } from 'react'
import Landing from './Landing.js'
import Services from './Services.js'
import Contact from './Contact.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Services />
        <Contact />
      </div>
    )
  }
}

export default Home
