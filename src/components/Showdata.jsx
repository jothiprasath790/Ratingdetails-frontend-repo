import axios from "axios";
import './Showdata.css';
import React, { Component } from "react";

class Showdata extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(item => (
            <tr key={item.sid}>
              <td>{item.sid}</td>
              <td>{item.sname}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Showdata;
