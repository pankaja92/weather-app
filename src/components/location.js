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
    fetch('https://geoip.nekudo.com/api')
    .then((res) => res.json())
    .then((res) => {
      var location = {};
      location.lat = res.location.latitude;
      location.lon = res.location.longitude;
      location.country = res.country.name;
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
