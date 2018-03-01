import React, { Component } from 'react';
import './App.css';

import Weather from './components/weather';
import CurrrentLocation from './components/location';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      location : {
        lat : '',
        lon : '',
        country : '',
        city : ''
      }
    }
  }

  getLocation(location){
    console.log(location);
    this.setState({ location });
  }

  render() {
    return (
      <div className="App">
        <CurrrentLocation location={this.getLocation.bind(this)}/>
        <Weather locationinfo={this.state.location} />
      </div>
    );
  }
}

export default App;
