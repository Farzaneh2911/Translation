import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getFirestore, collection, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebaseInit';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
 // Assuming your CSS is in this file
import '../css/cardStyle.css';
import {  Typography } from '@mui/material';

const localizer = momentLocalizer(moment);
const db = getFirestore(app);

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSlotId, setSelectedSlotId] = useState(null);


  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimeSlots(selectedDate);
    }
  }, [selectedDate]);

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setAvailableTimeSlots([]); // Reset available time slots when new date is selected
  };
  const handleTimeSlotSelect = (slot) => {
    setSelectedSlotId(selectedSlotId === slot.id ? null : slot.id); // Set the selected slot id
    // Optional: Any other logic when a slot is selected
  };
  const navigate = useNavigate();
  const handleNextClick = (slot) => {
    console.log("Proceeding with slot: ", slot);
    navigate('/Interpretation-Form', { state: { date: selectedDate, time: slot.time} });
    // Implementation depends on what "Next" is supposed to do
  };
  
  
  const handleBookTimeSlot = async (slot) => {
    if (!slot.available) return; // If slot isn't available, do nothing
  
    try {
      await bookTimeSlot(slot.id);
      const newSlots = availableTimeSlots.map(s => 
        s.id === slot.id ? { ...s, available: false } : s
      );
      setAvailableTimeSlots(newSlots); // Update the local state to reflect the booking
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error booking time slot:', error);
      setError('Failed to book time slot.'); // Display error message
    }
  };
  async function bookTimeSlot(slotId) {
    const slotRef = doc(db, 'availableTimeSlots', slotId);

    try {
        await updateDoc(slotRef, {
            available: false
        });
        console.log('Time slot booked successfully!');
    } catch (error) {
        console.error('Error booking time slot:', error);
    }
 }


  const fetchAvailableTimeSlots = async (selectedDate) => {
    setLoading(true);
    try {
      const dateStart = moment(selectedDate).startOf('day').utcOffset(60);
      const dateEnd = moment(selectedDate).endOf('day').utcOffset(60);

      const startTimestamp = dateStart.toDate();
      const endTimestamp = dateEnd.toDate();

      const timeSlotsQuery = query(
        collection(db, 'availableTimeSlots'),
        where('date', '>=', startTimestamp),
        where('date', '<=', endTimestamp),
        where('available', '==', true)
      );
      
      const querySnapshot = await getDocs(timeSlotsQuery);
      const timeSlots = querySnapshot.docs.map(doc => ({
        id: doc.id,
        time: doc.data().timeSlot.toDate().toLocaleTimeString(),
        available: doc.data().available,
      }));

      setAvailableTimeSlots(timeSlots.filter(slot => slot.available));
    } catch (error) {
      console.error('Error fetching available time slots:', error);
      setError('Failed to fetch available time slots.');
    }
    setLoading(false);
  };

  return (
    <>
    <Typography variant="h4" component="h1" style={{ textAlign: 'center', margin: '20px 0' }}>
        Select date & time
      </Typography>
    <div className="main-container">
      
      <div className="left-container">
        <div className="calendar-container">
          <Calendar
            localizer={localizer}
            onSelectSlot={handleSelectSlot}
            selectable
            events={[]}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700, flex: 1 }}
          />
          <div className="time-slots" style={{backgroundImage: `url('/images/time.gif')` }} >
            {loading ? <CircularProgress /> : (
              <div>
                {selectedDate && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h3 style={{color:'green',fontSize:20,fontWeight:'bold'}}>Available Time Slots for {moment(selectedDate).format('MMMM DD, YYYY')}</h3>
                  </div>
                )}
                {availableTimeSlots.map((slot, index) => (
                  <div key={index} className={`time-slot-container ${selectedSlotId === slot.id ? 'selected' : ''}`}>
                  <div
                    className="time-slot "
                    onClick={() => handleTimeSlotSelect(slot)}
                  >
                    {slot.time}
                  </div>
                  
                   <button className="next-button" onClick={() => handleNextClick(slot)}
                    style={{ display: selectedSlotId === slot.id ? 'flex' : 'none' }} >
                     Next
                   </button>
                 
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError('')}
        message={error}
        style={{ backgroundColor: 'red' }}
      />
    </div>
    </>
  );
};


export default MyCalendar;
