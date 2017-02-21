import React, { Component } from 'react'
import twitterSocial from './tw_icon.png'
import facebookSocial from './fb_icon.png'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="socialLinks">
          <div className="fbLink">
            <a href="http://www.facebook.com/digitalhyperspace"><img src={facebookSocial} alt="facebook" width="32" height="32"/></a>
          </div>
          <div className="twLink">
            <a href="http://www.twitter.com/digitalhyper_"><img src={twitterSocial} alt="twitter" width="32" height="26"/></a>
          </div>
        </div>
        <p><a href="http://www.digitalhyperspace.com">Digital Hyperspace</a> &copy; 2017</p>
      </div>
    )
  }
}

export default Footer
