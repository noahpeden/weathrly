const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jQuery');

$.get('http://weatherly-api.herokuapp.com/api/weather').then(function(data){
  returnLocation(data);
  });


function returnLocation(data){
  data.forEach(function(data){
    if(data.location === 'denver'){
      $('#weather').append(`<li>${data.location}</li>`);
    }
  });
}
