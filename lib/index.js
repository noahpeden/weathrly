import ajax from './ajax.js';
import style from './style.scss';
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Main source='http://weatherly-api.herokuapp.com/api/weather/'/>, document.getElementById('application'));
