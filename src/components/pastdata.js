import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class PastData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stuff: []
    }
  }

  componentWillReceiveProps(prevProps, nextProps) {
    let {stuff} = this.state;
    stuff.push(this.props.stuff);
    this.setState({stuff});
  }

  render() {
    let {stuff} = this.state;
    let tablecontent = stuff.map((pastData, i) => {
      return (
        <tr key={i}>
          <td>{i}</td>
          <td>{pastData.latitude}</td>
          <td>{pastData.longitude}</td>
          <td>{pastData.unix}</td>
          <td>{pastData.natural}</td>
        </tr>
      );
    }).reverse();

    return (
      <Table className="PastData" condensed responsive bordered>
        <thead>
          <tr>
            <th>count</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Timestamp (unix)</th>
            <th>Timestamp (natural)</th>
          </tr>
        </thead>
        <tbody>
          {tablecontent}
        </tbody>
      </Table>
    );
  }
}
