import React from 'react';

export const Weather = (props) => {
  const { date, temp, weatherType, getHourlyWeather } = props;
  const chanceOfWeather = Math.round(weatherType.chance * 100) + '%';
  const weatherTypeExtreme = weatherType.scale >= 3 ? 'WEATHER ALERT' : null;
  return (
    <div>
      <article className={weatherType.type}>
            Date: {date} <br/>
            Temperature High: {temp.high} <br/>
            Temperature Low: {temp.low} <br/>
            Likelihood: { chanceOfWeather } <br/>
        <button onClick={ (e) => { getHourlyWeather(e, props) }
            }>Hourly</button>
        <h3 className='extremeWeather'>{weatherTypeExtreme}</h3>
      </article>
    </div>
  );
};
