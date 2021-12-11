import React from 'react'
// import NumberWord from './components/NumberWord'
import Countdown from './components/Countdown'
// import './index.css'

// class CountdownIndex extends React.Component {
//     constructor () {
//         super () 
//             this.state = {
//                 days: '',
//                 hours: '',
//                 minutes: '',
//                 seconds: '',
//                 start: Date.now()
//             }
        
//     }
//     render () {
//     return (
//         <div className="countdown-container">
//             {/* <h2 className="countdown-clock"> 00 : 00 : 34 : 55</h2> */}
//             <div className="countdown-clock">
//                 <NumberWord number="00" text="days"/> &nbsp;:&nbsp;
//                 <NumberWord number="00" text="hours"/> &nbsp;:&nbsp;
//                 <NumberWord number="00" text="minutes"/> &nbsp;:&nbsp;
//                 <NumberWord number="00" text="seconds"/>
//             </div>
//             <Countdown />
//         </div>
//     )
//     }
// }

// export default CountdownIndex

  
  class CountdownIndex extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        events:[
          { name:'Slam Jam', date:'February 3, 2022' },
        //   { name:'Inauguration', date:'January 20, 2021' },
        ],
        // newDate: "",
        // newName: "",
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
  
