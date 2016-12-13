import React from 'react'
import $ from 'jQuery'
import {WeatherCards} from './WeatherCards'

export default class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      location: '',
      weather: null,
      hourlyWeather: [],
    }
  }

  getApiLocation(e){
    $.get(this.props.source + (this.state.location).toLowerCase(), (apiLocationObject)=> {
      this.setState({ weather:apiLocationObject.slice(0, 7)}, localStorage.setItem('location', this.state.location))
    })
  }

  enableSubmitButton() {
    return this.state.location !== '' ? false : true
  }

  getHourlyWeather(e, props) {
    let hourlyArray = props.hourly.timeBreakDown;
    let displayArray = [];
    hourlyArray.map((e, index) => {
      let currentHour = e[`hour${index+1}`];
      return(
        displayArray.push(<ul key={index}>
          <li>Temperature: {currentHour.temp}</li>
          <li>Type of Weather: {currentHour.type}</li>
        </ul>
        )
      )
    })
    this.setState({hourlyWeather: displayArray});
  }

  setLocation(event){
    {this.setState({location: event.target.value})}
  }

  render(){
    return (
      <div>
        <input
              placeholder='location'
              value = {this.state.location || ''}
              className ='main-input'
              onChange={(event) => this.setLocation(event)}
              />
        <input
              type='submit'
              className='submit-btn'
              onClick= { (e) => {this.getApiLocation(e)}}
              disabled = {this.enableSubmitButton()}
              />
        <h2 className="current-location" >Location: {this.state.location}</h2>
        <WeatherCards
              getHourlyWeather={this.getHourlyWeather.bind(this)}
              weather={this.state.weather}
              location={this.state.location}
              />
        <section>{this.state.hourlyWeather}</section>
      </div>
    )
  }

  componentDidMount() {
    this.setState({location: localStorage.getItem('location' || '')}, () =>
     this.getApiLocation()
   );
  }
}
