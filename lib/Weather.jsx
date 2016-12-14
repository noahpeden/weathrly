import React from 'react'

export const Weather = (props) => {
  const { location, date, temp, weatherType, scale, getHourlyWeather } = props;
  const weatherExtremeType = <p className='extremeWeather'>WEATHER ALERT</p>;
  return (
    <div>
      <article className={weatherType.type}>
        Date: {date} <br/>
        Temperature High: {temp.high} <br/>
        Temperature Low: {temp.low} <br/>
      Likelihood: { Math.round(weatherType.chance * 100) + '%'} <br/>
        <button onClick={ (e) => {
          getHourlyWeather(e, props) }
        }>Hourly</button>
        {weatherType.scale >= 3 ? weatherExtremeType : null }
      </article>
    </div>
  )
}
