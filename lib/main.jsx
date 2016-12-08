const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jQuery');

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      dataArray: null,
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  weatherData(){
    $.get('http://weatherly-api.herokuapp.com/api/weather/' + this.state.value)
    .then((data) => {
      console.log(data);
      this.setState({ dataArray: data})
    });
  }

  arrayMap(dataArray) {
    this.state.dataArray.map((day) => {
      console.log(day);
    })
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(){
    this.weatherData();
    this.arrayMap(this.state.dataArray);
    // alert("A city was submitted: " + this.state.value);
  }

  render() {
    return (
      <div>
        <h1>Welcome! Please Submit a Location</h1>
        <input
          type="text"
          className="CitySelector"
          // value={this.state.value}
          onChange={this.handleChange} />
        <button
          type="submit"
          className="CitySelector-submit"
          value="Submit"
          onClick={this.handleSubmit}>
          Submit
        </button>
        <section>Your weather in {this.state.value}
          <article>
            {/* {this.state.dataArray} */}
          </article>
        </section>
      </div>
    );
  }
}


ReactDOM.render(<Main />, document.getElementById('application'))
