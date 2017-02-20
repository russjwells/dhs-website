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

        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Reddit Clone</h2>
            <p>Authentication, Upvotes, Comments, Comment Upvotes</p>
            <p><i>mongo, angular, express, node</i></p>
            <p><a href="https://redditcl0ne.herokuapp.com/">Web App</a> | <a href="https://github.com/russjwells/redditclone">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Many Timers</h2>
            <p>You can time everything at once right here.</p>
            <p><i>react</i></p>
            <p><a href="https://github.com/russjwells/time_tracking_app">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Voting App</h2>
            <p>upvotes and downvotes</p>
            <p><i>react</i></p>
            <p><a href="https://github.com/russjwells/voting_app">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Github Notetaker</h2>
            <p>Search github by username. Take notes on users locally.</p>
            <p><i>react</i></p>
            <p><a href="https://github.com/russjwells/notetaker">Repository</a></p>
          </div>
        </div>

        <div className="ProjectListItem">
          <div className="ProjectInfo">
            <h2>Twitter Clone</h2>
            <p>I recreated the functionality of Twitter.</p>
            <p><i>mongo, angular, express, node</i></p>
            <p><a href="https://twittercl0ne.herokuapp.com/">Web App</a> | <a href="https://github.com/russjwells/sittingweb">Repository</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectList
