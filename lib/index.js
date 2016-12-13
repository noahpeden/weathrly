// require('./main.jsx')
// require('./WeatherCards')
require('./ajax.js')
require('./style.scss')
import Main from './Main'
import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'))
