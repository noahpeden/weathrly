import React from 'react';
import { Weather } from './Weather';

function renderHourly(cardDate, selectedDate, hourlyArray) {
  if (cardDate === selectedDate) {
    return hourlyArray.map((currentHour, index) => <div key={index}>
      <div>Temperature: { currentHour.temp } </div>
      <div>Type of Weather: { currentHour.type } </div>
    </div>);
  }
  return '';
}

export const WeatherCards = (props) => {
  const { weather, hourlyArray, shouldShowHourlyFor } = props;
  if (!weather) {
    return (
      <div>Please enter a supported location!</div>
    );
  }
  return (
    <div className='Weather-Card'>
      { weather.map((card) => <div key={card.date}>
        <Weather getHourlyWeather={props.getHourlyWeather} {...card} />
      {renderHourly(card.date, shouldShowHourlyFor, hourlyArray)}
      </div>)}
    </div>
  );
};
