import React, { useState } from 'react';


function Booking() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [isFormSubmitted,setIsFormSubmitted] = useState (false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsFormSubmitted(true);
    };
    
    return(<div>
    {!isFormSubmitted?(
        <div className='BookingForm'>
          <div className='BookingHeading'>
          <h2>Table Booking</h2></div>
          <div className='BookingFormDiv'>
          <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <div className='FormDiv'><label htmlFor="res-date">Date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <label htmlFor="res-time">Time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
              ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form></div>
        </div>):(<div>Form submitted</div>)
    }

    </div>)
    
  }
export default Booking;
  