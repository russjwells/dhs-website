import React, { Component } from 'react'
import russellphoto from './russellphoto2.jpg'

class Team extends Component {
  render() {
    return (
      <div className="Team Section">
        <div className="TeamMember">
          <div className="MemberPhoto">
            <img src={russellphoto} alt="Russell" width="200" height="200"/>
          </div>
          <div className="MemberDetails">
            <h2>Russell Wells</h2>
            <p>CEO & Creative Director</p>
            <p>Lead Designer & Lead Software Engineer</p>
            <p>Russell has been creating digital products all his life. He crafts elegant and compelling experiences.</p>
            <p><a href="http://www.russellwells.online">www.russellwells.online</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Team
