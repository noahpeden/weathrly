import React from 'react'
// import Main from 'Main'

export const Weather = (props) => {
  let {location, date, temp, weatherType, getHourlyWeather} = props;
  return (
    <div>
      <article className={weatherType.type}>
        Date: {date} <br/>
        Temperature High: {temp.high} <br/>
        Temperature Low: {temp.low} <br/>
      Likelihood: {Math.round(weatherType.chance*100) + "%"} <br/>
        Scale: {weatherType.scale} <br/>
      </article>
    </div>
  )
}

// module.exports = Weather;

        // <button onClick={ (e) => {
        //   getHourlyWeather(e, props)}
        // }>Hourly</button>
