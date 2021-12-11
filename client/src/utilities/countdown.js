
// export function showRemaining() {
//     let end = new Date('02/03/2022 10:1 AM');
//     let _second = 1000;
//     let _minute = _second * 60;
//     let _hour = _minute * 60;
//     let _day = _hour * 24;

//         let now = new Date();
//         let distance = end - now;
//         if (distance < 0) {
//             clearInterval(now);
//             // document.getElementById('countdown').innerHTML = 'EXPIRED!';
//             console.log("Time's up!")

//             return;
//         }
//         let days = Math.floor(distance / _day);
//         let hours = Math.floor((distance % _day) / _hour);
//         let minutes = Math.floor((distance % _hour) / _minute);
//         let seconds = Math.floor((distance % _minute) / _second);

//         // console.log(days, hours, minutes, seconds)
//         return { days, hours, minutes, seconds }
//     }
