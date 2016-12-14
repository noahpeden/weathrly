import React from 'react';
import $ from 'jQuery';
import { WeatherCards } from './WeatherCards';
import { Inputs } from './controls/Inputs';

const API = 'http://weatherly-api.herokuapp.com/api/weather/';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      usersInput: '',
      weather: null,
      hourlyWeather: [],
      hourlyArray: [],
      shouldShowHourlyFor: '',
    };
  }

  getApiLocation() {
    $.get(API + (this.state.usersInput).toLowerCase(), (apiLocationObject) => {
      const newState = {
        weather: apiLocationObject.slice(0, 7),
        location: this.state.usersInput,
        usersInput: '',
      };
      this.setState(newState,
        localStorage.setItem('location', this.state.location));
    });
  }

  getHourlyWeather(e, props) {
    const displayArray = props.hourly.timeBreakDown.map((breakdown, index) => {
      return breakdown[`hour${index + 1}`];
    });
    this.setState({ hourlyArray: displayArray, shouldShowHourlyFor: props.date });
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
              hourlyArray={this.state.hourlyArray}
              shouldShowHourlyFor={this.state.shouldShowHourlyFor}
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
