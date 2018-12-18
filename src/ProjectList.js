import React, {Component} from 'react';

class ProjectList extends Component{
  render(){
    return(
      <div className="ProjectList">
      <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Sexy Awakening</h2>
            <p>Swipe with intention! Earth's first conscious sexuality portal. The best place to meet new conscious friends, lovers, and romantic interests online.</p>
            <p><a href="http://www.sexyawakening.com">www.sexyawakening.com</a></p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Sitting</h2>
            <p>Meditation for the masses.</p>
            <p><a href="http://www.sitting.io">www.sitting.io</a> | <a href="https://itunes.apple.com/us/app/sitting-timer/id1139439714">iOS App</a></p>
            <p><a href="https://github.com/russjwells/sittingweb">Web App Source</a> | <a href="https://github.com/russjwells/SittingApp">iOS App Source</a></p>
          </div>
        </div>
        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Promethean Temples</h2>
            <p>A magical adventure game.</p>
            <p><a href="http://www.prometheantemples.com">www.prometheantemples.com</a> | <a href="#">Mac</a>/<a href="#">Win</a></p>
          </div>
          <div className="ProjectInfo">
            <h2>Harmonize</h2>
            <p>A permaculture learning game.</p>
            <p><a href="http://www.harmonize.fun">www.harmonize.fun</a> | <a href="https://itunes.apple.com/us/app/sitting-timer/id1139439714">iOS App</a></p>
            <p><a href="https://github.com/russjwells/sittingweb">Source</a> | <a href="#">Mac</a>/<a href="#">Win</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
