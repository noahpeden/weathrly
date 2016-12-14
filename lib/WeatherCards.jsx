import React from 'react'
import { Weather } from './Weather'

export const WeatherCards = (props) => {
  let { weather } = props
  if (!weather) {
    return (
      <div>Please enter a supported location!</div>
    )
  }
  return (
    <div className='Weather-Card'>
      { weather.map((card) => <div key={card.date}>
        <Weather getHourlyWeather={props.getHourlyWeather} {...card} />
      </div>)}
    </div>
  )
}
