import React, {Component} from 'react';
import { Table } from 'react-bootstrap';

import PastData from './pastdata';

export default class Position extends Component {
  render() {
    let { longitude, latitude } = this.props.data.iss_position;
    let { timestamp } = this.props.data;
    let date = new Date(timestamp*1000);
    let hr = date.getHours();
    let min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    let stuff = {
      latitude,
      longitude,
      unix: timestamp,
      natural: `${hr}:${min}:${sec}`
    }

    return (
      <div className="Position">
        <h2>Current Data on the ISS</h2>
        <Table bordered condensed className="position">
          <tbody>
            <tr>
              <td className="text-right">Current Latitude</td>
              <td className="bg-purp">{latitude}</td>
            </tr>
            <tr>
              <td className="text-right">Current Longitude</td>
              <td className="bg-purp">{longitude}</td>
            </tr>
            <tr>
              <td className="text-right">Unix Timestamp</td>
              <td className="bg-purp">{timestamp}</td>
            </tr>
            <tr>
              <td className="text-right">Natural Time</td>
              <td className="bg-purp">{`${hr}:${min}:${sec}`}</td>
            </tr>
          </tbody>
        </Table>
        { stuff ? <PastData stuff={stuff} /> : ""}
      </div>
    );
  }
}
