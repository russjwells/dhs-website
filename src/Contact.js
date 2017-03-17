import React, { Component } from 'react'

class Contact extends Component {
  render(){
    return(
      <div className="Contact Section">
        <div className="ContactForm">
          <form>
            <h2>Interested in our services?</h2>
            <p>Your Email:</p><input type="text"/>
            <p>Your Message:</p><textarea></textarea>
            <br/>
            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
