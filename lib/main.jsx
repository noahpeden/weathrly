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
        <WeatherCards weather={this.state.weather} location={this.state.location} />
        </div>
    )
  }

  componentDidMount() {
    this.setState({location: localStorage.getItem('location' || '')}, () =>
     this.locationAccepted()
   );
  }
}

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
        <Weather {...card} />
      </div> )}
    </div>
  )
}

const Weather = (props) => {
  let {location, date, temp, weatherType} = props
  return (
    <div>
      <article className={weatherType.type}>
        Date: {date} <br/>
        Temperature: {temp.high} <br/>
        Likelihood of Weather: {weatherType.scale}
        <button onClick={ (e) => {
          getHourlyWeather(e, props)}
        }>Hourly</button>
      </article>
    </div>
  )
}

function getHourlyWeather(e, props) {
  // console.log(e.target);
  // console.log(props.hourly.timeBreakDown);

  { props.hourly.timeBreakDown.map((hour) => <div>
    <
  </div> )}


}

ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'))
