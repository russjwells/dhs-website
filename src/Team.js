import React, { Component } from 'react'
import russellphoto from './russellphoto.png'

class Team extends Component {
  render() {
    return (
      <div className="Team Section">
        <div className="TeamMember">
          <div className="MemberPhoto">
            <img src={russellphoto} alt="Russell" width="200" height="200"/>
          </div>
          <div className="MemberDetails">
            <h3>Russell Wells</h3>
            <p>Lead Software Engineer and Digital Designer</p>
            <p>Russ has been creating digital products his whole life. He crafts elegant and compelling digital experiences.</p>
            <p><a href="http://www.russellwells.online">www.russellwells.online</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Team
