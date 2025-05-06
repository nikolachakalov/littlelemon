//import './App.css';

import {React, useEffect } from 'react';

import BookingForm from './BookingForm.js';


// const seededRandom = function (seed) {
//   var m = 2**35 - 31;
//   var a = 185852;
//   var s = seed % m;
//   return function () {
//       return (s = s * a % m) / m;
//   };
// }

// const fetchAPI = function(date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for(let i = 17; i <= 23; i++) {
//       if(random() < 0.5) {
//           result.push(i + ':00');
//       }
//       if(random() < 0.5) {
//           result.push(i + ':30');
//       }
//   }
//   return result;
// };



// const submitAPI = function(formData) {
//   return true;
// };

export const BookingPage = () => {




  // const availableTimes = [
  //   { label: '17:00', value: 1 },
  //   { label: '18:00', value: 2 },
  //   { label: '19:00', value: 3 },
  //   { label: '20:00', value: 4 },
  //   { label: '21:00', value: 5 },
  //   { label: '22:00', value: 6 },
  //   { label: '23:00', value: 7 }
  // ];


  return (

    <BookingForm />

  )
};

export default BookingPage;



