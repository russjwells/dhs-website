import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Title">
          <IndexLink to='/' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='Title'>
            Digital Hyperspace
          </IndexLink>
        </div>
        <nav className="Menu">
          <Link to='/projects' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Projects
          </Link>
          <Link to='/team' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Team
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            About
          </Link>
        </nav>
      </div>
    )
  }
}

export default Header
