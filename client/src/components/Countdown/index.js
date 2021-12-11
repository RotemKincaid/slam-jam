import React from 'react'
import Countdown from './components/Countdown'
  
  class CountdownIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events:[
          { name:'Slam Jam', date:'February 3, 2022' },
        ]
      };
    }
    
    // addNewEvent = () => {
    //   let evt = {name: this.state.newName, date: this.state.newDate};
    //   let newEvents = this.state.events.concat(evt);
    //   this.setState({
    //     newDate: "",
    //     newName: "",
    //     events: newEvents,
    //   });
    // }
    
    render() {
      let events = this.state.events.map((evt) =>
        <Countdown key={evt.date} eventName={evt.name} eventDate={evt.date} />
      );
      return (
        <div className="countdown">
          {events}
        </div>                           
      )
    }
  }
  
  export default CountdownIndex
  
