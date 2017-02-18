import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
      <div className="Contact Section">

        <div className="ContactForm">
          <form>
            <h2>Send us a message:</h2>
            <h3>email:</h3><input type="text"/>
            <h3>message:</h3><textarea></textarea>
            <br/>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
