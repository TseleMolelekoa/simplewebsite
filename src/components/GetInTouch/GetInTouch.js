import React from 'react';
import axios from 'axios';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    // Bind event handlers
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.");
      }
    }).catch(error => {
      console.error('Error:', error);
      alert("An error occurred. Please try again later.");
    });
  }

  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="Contact">
        <h1>GetInTouch</h1>
        <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
