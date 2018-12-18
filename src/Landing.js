import React, { Component } from 'react'
import bgphoto from './nasa-53884-unsplash.jpg'

var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: `url(${bgphoto})`,
  backgroundSize: 'cover',
  backgroundPosition: '50% 10%',
  borderBottom: '1px solid #616161'
};

class Landing extends Component {
  render(){
    return(
      <div className="Landing Section" style={sectionStyle}>
        <div className="Greeting">
          <h1>Design, Media, and Technology for an Evolving World.</h1>
        </div>
      </div>
    )
  }
}

export default Landing
