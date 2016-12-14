import React from 'react';
import $ from 'jQuery';
import { WeatherCards } from './WeatherCards';
import { Inputs } from './controls/Inputs';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      usersInput: '',
      weather: null,
      hourlyWeather: [],
    };
  }

  getApiLocation() {
    this.state.location = this.state.usersInput;
    $.get(this.props.source + (this.state.location).toLowerCase(), (apiLocationObject) => {
      this.setState(
        { weather: apiLocationObject.slice(0, 7), usersInput: '' },
        localStorage.setItem('location', this.state.location));
    });
  }

  getHourlyWeather(e, props) {
    const hourlyArray = props.hourly.timeBreakDown;
    const displayArray = [];
    hourlyArray.map((e, index) => {
      const currentHour = e[`hour${index + 1}`];
      return (
        displayArray.push(<ul key={index}>
          <li>Temperature: {currentHour.temp}</li>
          <li>Type of Weather: {currentHour.type}</li>
        </ul>
        )
      );
    });
    this.setState({ hourlyWeather: displayArray });
  }

  setLocation(event) {
    this.setState({ usersInput: event.target.value });
  }

  render() {
    return (
      <div>
        <Inputs
              location={this.state.location}
              usersInput={this.state.usersInput}
              setLocation = {this.setLocation.bind(this)}
              getApiLocation = {this.getApiLocation.bind(this)}
              />
        <h2 className="current-location" >Location: {this.state.location}</h2>
        <WeatherCards
              getHourlyWeather={this.getHourlyWeather.bind(this)}
              weather={this.state.weather}
              location={this.state.location}
              />
        <section>{this.state.hourlyWeather}</section>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ location: localStorage.getItem('location' || '') }, () =>
     this.getApiLocation()
   );
  }
}
