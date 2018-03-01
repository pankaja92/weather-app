import React, { Component } from 'react';

class CurrrentLocation extends Component {
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

  componentWillMount(){
    fetch('https://freegeoip.net/json/')
    .then((res) => res.json())
    .then((res) => {
      var location = {};
      location.lat = res.latitude;
      location.lon = res.longitude;
      location.country = res.country_name;
      location.city = res.city;
      this.setState({location})
      this.props.location(this.state.location);
    })
    .catch((res) => console.log(res))
  }

  render(){
    return (
      <div className='App-header'>
        Weather of the Currrent Location
      </div>
    );
  }
}

export default CurrrentLocation;
