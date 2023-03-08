import React, { Component } from 'react';
import './Update.css';
import axios from 'axios';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: '',
      sname: '',
      rating: '',
      
    };
  }

  handleSidChange = (event) => {
    this.setState({ sid: event.target.value });
  };

  handleSnameChange = (event) => {
    this.setState({ sname: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ rating: event.target.value });
  };

 
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      sid: this.state.sid,
      sname: this.state.sname,
      rating: this.state.rating,
      
    };

    axios.put('http://127.0.0.1:8080/updateDetails', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">SID</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.sid}
          onChange={this.handleSidChange}
        />

        <label className="sign-label">Name</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.sname}
          onChange={this.handleSnameChange}
        />

        <label className="sign-label">Rating</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.rating}
          onChange={this.handleRatingChange}
        />

       
        
        <button className="update-button" type="submit">
          Update
        </button>
      </form>
    );
  }
}

export default Update;
