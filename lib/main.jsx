import React from 'react'
import ReactDOM from 'react-dom'
var $ = require('jQuery')

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      location: '',
      weather: null ,
    }
  }
  locationAccepted(e){
    $.get(this.props.source + this.state.location , (results)=> {
      this.setState({ weather:results}, localStorage.setItem('location', this.state.location))
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
  let { weather } = props

  if(!weather) {
    return (
      <div>please enter a location!
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
  let {location, date, temp} = props
  return (
    <div>
      <article>
        {location}{date}{temp.high}
      </article>
    </div>
  )
}

ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'))
