import React, {Component} from 'react';

class ProjectList extends Component{
  render(){
    return(
      <div className="ProjectList">
        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Sitting</h2>
            <p>A multi-platform meditation timer and tracker.</p>
            <p><i>react, react native, node, express</i></p>
            <p><a href="http://www.sittingtimer.com">Web App</a> | <a href="https://github.com/russjwells/sittingweb">Repository</a></p>
            <p><a href="https://itunes.apple.com/us/app/sitting-timer/id1139439714">iOS App</a> | <a href="https://github.com/russjwells/SittingApp">Repository</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
