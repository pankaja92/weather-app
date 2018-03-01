import React, { Component } from 'react';
import WeatherIcon from 'react-open-weather-icons'

const iconstyle = {
  width : '100px',
  height : '100px',
  margin: 'auto',
  paddingTop: '15px'
}

class Weathericon extends Component{
  constructor(props){
    super(props);
    this.state = {
      icon : ''
    }
    console.log(this.props.icon);
  }

  componentWillMount(){
    this.setState({ icon : this.props.icon });
  }

  render(){

    let weather_icon = null;
    if(this.state.icon === ''){
      weather_icon = null;
    }
    else if(this.state.icon !== '') {
      weather_icon = <WeatherIcon name={this.state.icon} className="my-awesome-icon" /> ;
    }

    return (
      <div style={iconstyle}>
        {weather_icon}
      </div>
    );
  }
};

export default Weathericon;
