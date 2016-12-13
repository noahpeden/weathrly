import React from 'react'
// import Main from 'Main'

const Weather = (props) => {
  let {location, date, temp, weatherType, getHourlyWeather} = props
  return (
    <div>
      <article className={weatherType.type}>
        Date: {date} <br/>
        Temperature High: {temp.high} <br/>
        Temperature Low: {temp.low} <br/>
      Likelihood: {Math.round(weatherType.chance*100) + "%"} <br/>
        Scale: {weatherType.scale} <br/>

        // <button onClick={ (e) => {
        //   getHourlyWeather(e, props)}
        // }>Hourly</button>
      </article>
    </div>
  )
}

module.exports = Weather;
