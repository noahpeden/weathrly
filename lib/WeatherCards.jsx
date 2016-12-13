import React from 'react'
import {Weather} from './Weather'

export const WeatherCards = (props) => {
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

// module.exports = WeatherCards;
