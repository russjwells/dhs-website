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
            <h2>Interested in our services?</h2>
            <p>Send inquires to: digitalhyperspace369@gmail.com</p>
        </div>
      </div>
    )
  }
}

export default Contact
