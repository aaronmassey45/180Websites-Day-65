import React, {Component} from 'react';

export default class People extends Component {
  render() {
    let { data } = this.props;
    let people = data.map(person => {
      return (
        <li key={person.name}>{person.name}</li>
      );
    })
    return (
      <div className="People">
        <h2>There are currently {data.length} people in space!</h2>
        <ul>
          {people}
        </ul>
      </div>
    );
  }
}
