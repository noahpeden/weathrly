const React = require('react');
const ReactDOM = require('react-dom');


class WelcomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <input
          type='text'
          className='City-Selector'
          name='city'
          onChange={(e) => {
            console.log(e);
          }}
          value='Select a City'
        />
      </div>
    )
  }
}


ReactDOM.render(<WelcomePage />, document.getElementById('application'))
