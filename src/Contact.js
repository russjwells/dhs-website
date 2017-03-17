import React, { Component } from 'react'

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'tier5'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <div className="Contact Section">
        <div className="ContactForm">
          <form>
            <h2>Interested in our services?</h2>
            <p>Your Email:</p>
            <input type="text"/>
              Your budget:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="tier1">less than $1000</option>
                <option value="tier2">$1000-$2000</option>
                <option value="tier3">$2000-$5000</option>
                <option value="tier4">$5000-$10,000</option>
                <option value="tier5">$10,000+</option>
              </select>
            <p>Your Message:</p>
            <textarea></textarea>

            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
