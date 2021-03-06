import React, { Component } from 'react'
import {Link, IndexLink} from 'react-router'
import dh_highlight from './dh_highlight.png'
import dh_lowlight from './dh_lowlight.png'

class Header extends Component {
  render() {
    var TitleStyle = {
          backgroundImage: 'url(' + dh_lowlight + ')',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          cursor: 'pointer'
        }
    return (
      <div className="Header">
          <IndexLink
            to='/'
            style={ TitleStyle }
            className='TitleImage'>
             <div className="Title" >
             </div>
          </IndexLink>
        <nav className="Menu">
          <Link
            to='/projects'
            style={{ textDecoration: 'none' }}
            activeClassName='ActiveMenuItem'
            className='MenuItem'>
            Our Work
          </Link>
          <Link
            to='/team'
            style={{ textDecoration: 'none' }}
            activeClassName='ActiveMenuItem'
            className='MenuItem'>
            Our Team
          </Link>
          <Link
            to='/about'
            style={{ textDecoration: 'none' }}
            activeClassName='ActiveMenuItem'
            className='MenuItem'>
            About Us
          </Link>
        </nav>
      </div>
    )
  }
}

export default Header
