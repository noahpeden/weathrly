// import React from 'react'
// import ReactDOM from 'react-dom'
// // import Main from 'main'
// // import Weather from 'main'
//
// const WeatherCards = (props) => {
//   let currentLocation = props.location
//   let { weather } = props
//   if(!weather || !weather.length) {
//     return (
//       <div>Please enter a supported location!
//       </div>
//     )
//   }
//   return (
//     <div className='Weather-Card'>
//       <h2 className="current-location">Location: {currentLocation}</h2>
//       { weather.map((card) => <div key={card.date}>
//         <Weather {...card} />
//       </div> )}
//     </div>
//   )
// }
//
// module.export = WeatherCards