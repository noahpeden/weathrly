import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jQuery'
// var $ = require('jQuery')

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      location: '',
      weather: null ,
    }
  }
  componentDidMount() {
      this.setState({location: localStorage.getItem('location' || '')}, () =>
       this.locationAccepted()
     );
      this.setState({location: ''});
    }


  locationAccepted(e){
    $.get(this.props.source + this.state.location , (results)=> {
      this.setState({ weather:results.slice(0, 7)}, localStorage.setItem('location', this.state.location))
    })
    }

  render(){
    return (
      <div>
    <input placeholder='location'
           value = {this.state.location}
           onChange={(event) => { this.setState({location: event.target.value})}}/>
    <input type='submit'
            onClick= { (e) => {this.locationAccepted(e)}}
          />
          <WeatherCards weather={ this.state.weather }/>
        </div>
    )
  }
}

const WeatherCards = (props) => {
  let { weather, location } = props

  if(!weather) {
    return (
      <div>Please enter a location!
      </div>
    )
  }
  return (
    <div className='Weather-Card'>
      { weather.map((card) => <div key={card.date}>
        <Weather {...card} />
      </div> )}
    </div>
  )
}

const Weather = (props) => {
  let {location, date, temp, weatherType} = props
  console.log(weatherType.type);
  return (
    <div>
      <article className={weatherType.type}>
        <header>{location}</header>
        Date: {date} <br/>
        Temperature: {temp.high} <br/>
        Likelihood of Weather: {weatherType.scale}
      </article>
    </div>
  )
}

ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'))
