import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './navbar';
import Position from './position';
import People from './people';
import '../App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      people: ''
    }
  }

  componentDidMount() {
    this.getPeopleData();
    this.getIssData();
  }

  getPeopleData = () => {
    axios.get('http://api.open-notify.org/astros.json')
      .then((people) => {
        this.setState({ people: people.data.people })
      });
  }

  getIssData = () => {
    axios.get('http://api.open-notify.org/iss-now.json')
      .then((loc) => {
        this.setState({ data: loc.data }, () => {
          setTimeout(this.getIssData, 10000);
        })
      });

  }

  render() {
    let { data, people } = this.state;

    if (!data && !people) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div className="App">
        <Navbar brand="Internation Space Station Data"/>
        <div className="container">
          { people ? <People data={people} /> : ""}
          { data ? <Position data={data} /> : ""}
        </div>
      </div>
    );
  }
}
