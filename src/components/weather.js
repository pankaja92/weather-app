import React, { Component } from 'react';
import { CardTitle,
         CardText } from 'reactstrap';
import '../App.css';
import Weathericon from './weather-icon';

const API_KEY = '04063a35c28e8750b4c097d32bfb5c04';

class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather : {
        main : '',
        description : '',
        temp : '',
        wind : '', //meter/sec
        time : '', //UTC time will be converted
        country : '',
        city : '',
        icon : ''
      }
    }
  }

  componentWillReceiveProps({locationinfo}){
    var lat = locationinfo.lat;
    var lon = locationinfo.lon;
    var country = locationinfo.country;
    fetch(('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+API_KEY),  {
          method: "get"
      })
      .then((res) => res.json())
      .then((res) => {
        var weather = {};
        weather.main = res.weather[0].main;
        weather.description = res.weather[0].description;
        weather.temp = res.main.temp;
        weather.wind = res.wind.speed;
        weather.time = res.dt;
        weather.country = country;
        weather.city = res.name;
        weather.icon = res.weather[0].icon;
        this.setState({weather});
      })
      .catch((res) => console.log(res))
  }

  render(){

    let weather_comp = null;
    if (this.state.weather.temp) {
     weather_comp = (
       <div className='description'>
         <CardTitle className='weatherTitle'> This is the live weather condition of {this.state.weather.city}, {this.state.weather.country}</CardTitle>
         <div>
           <h4 className='weatherInfo'> Wind Speed : {this.state.weather.wind} m/s</h4>
           <h4 className='weatherInfo'> Temperature : {this.state.weather.temp} K</h4>
         </div>
         <Weathericon icon={this.state.weather.icon} />
         <CardText className='cloud_desc'>{this.state.weather.description}</CardText>
       </div>
     )
     } else {
       weather_comp = (
         <div>
           <div className='loading'>
             Loading ...
           </div>
         </div>
       );
     }

    return (
      <div className='weatherCard'>
        {weather_comp}
      </div>
    );
  }
};

export default Weather;
