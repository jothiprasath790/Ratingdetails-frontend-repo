import React, { Component } from 'react';
import './DeleteRecord.css';
import axios from 'axios';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid: '',
      sname: '',
      rating: ''
    };
  }

  handleIdChange = (event) => {
    
    this.setState({ sid:event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    const{ sid } = this.state;
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${sid}`);
  };

  render() {
    return (
      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">ID</label>
        <input
          className="delete-input"
          type="text"
          name="sid"
          value={this.state.sid}
          onChange={this.handleIdChange}
        />

        
        

        <button className="delete-button" type="submit">
          Delete Record
        </button>
      </form>
    );
  }
}

export default DeleteRecord;
