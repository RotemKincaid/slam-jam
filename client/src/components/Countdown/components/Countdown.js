import React from "react";
import './Countdown.css'

class Countdown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
  
    componentDidMount() {
      this.getTimeDifference(this.props.eventDate);
      setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
    }
  
    leadingZero(num) {
      return (num < 10 && num > 0) ? "0" + num : num;
    }
  
    getTimeDifference(eventDate) {
      const time = Date.parse(eventDate) - Date.parse(new Date());
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const seconds = Math.floor((time / 1000) % 60);
      this.setState({ days, hours, minutes, seconds });
    }
  
    render() {
      return (
        <div className="countdown-container">
          <div className="clock">
            <div className="number">{this.leadingZero(this.state.days)} </div>
            <div className="text">{this.state.days === 1 ? 'day' : 'days'}</div>
          </div>
          <div className="clock">
            <div className="number">{this.leadingZero(this.state.hours)} </div>
            <div className="text">{this.state.hours === 1 ? 'hour' : 'hours'}</div>
          </div>
          <div className="clock">
            <div className="number">{this.leadingZero(this.state.minutes)} </div> 
            <div className="text">{this.state.minutes === 1 ? 'minute' : 'minutes'}</div>
          </div>
          <div className="clock">
            <div className="number">{this.leadingZero(this.state.seconds)} </div>
            <div className="text">{this.state.seconds === 1 ? 'second' : 'seconds'}</div>
          </div>
        </div>
      );
    }
  }

  export default Countdown

