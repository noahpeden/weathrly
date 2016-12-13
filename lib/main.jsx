import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jQuery'
// import WeatherCards from 'WeatherCards.jsx'
// var $ = require('jQuery')

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      location: '',
      weather: null,
      hourlyWeather: [],
    }
  }

  locationAccepted(e){
    $.get(this.props.source + (this.state.location).toLowerCase(), (results)=> {
      this.setState({ weather:results.slice(0, 7)}, localStorage.setItem('location', this.state.location))
    })
  }

  enableSubmitButton() {
    return this.state.location !== '' ? false : true
  }

  getHourlyWeather(e, props) {
    console.log(e.target);
    let hourlyArray = props.hourly.timeBreakDown;
    let displayArray = [];
    // console.log(props.hourly.timeBreakDown[0].hour1);
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

  extremeWeather(props){
    console.log(props)
  }

  render(){
    return (
      <div>
    <input placeholder='location'
           value = {this.state.location}
           onChange={(event) =>
             {this.setState({location: event.target.value})}
           }
           />
    <input type='submit'
            onClick= { (e) => {this.locationAccepted(e)}}
            disabled = {this.enableSubmitButton()}
          />
        <WeatherCards getHourlyWeather={this.getHourlyWeather.bind(this)} weather={this.state.weather} location={this.state.location} />
        <section>{this.state.hourlyWeather}</section>
        </div>
    )
  }

  componentDidMount() {
    this.setState({location: localStorage.getItem('location' || '')}, () =>
     this.locationAccepted()
   );
  }
}
//END OF MAIN

const WeatherCards = (props) => {
  let currentLocation = props.location
  let { weather } = props
  if(!weather || !weather.length) {
    return (
      <div>Please enter a supported location!
      </div>
    )
  }
  return (
    <div className='Weather-Card'>
      <h2 className="current-location">Location: {currentLocation}</h2>
      { weather.map((card) => <div key={card.date}>
        <Weather getHourlyWeather={props.getHourlyWeather} {...card} />
      </div> )}
    </div>
  )
}

const Weather = (props) => {
  let {location, date, temp, weatherType, getHourlyWeather} = props
  return (
    <div>
      <article className={weatherType.type}>
        Date: {date} <br/>
        Temperature High: {temp.high} <br/>
        Temperature Low: {temp.low} <br/>
        Likelihood: {weatherType.chance*100 + "%"} <br/>
        Scale: {weatherType.scale} <br/>

        <button onClick={ (e) => {
          getHourlyWeather(e, props)}
        }>Hourly</button>
      </article>
    </div>
  )
}


ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'))
