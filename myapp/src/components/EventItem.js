// components/EventItem.js

import React from 'react';
import axios from 'axios';

const EventItem = ({ event, user, setEvents }) => {
  const handleLike = async () => {
    try {
      const res = await axios.put(`/api/events/${event.id}/like`, null, { withCredentials: true });
      setEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === event.id ? { ...e, is_liked: !e.is_liked } : e))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="event-item">
      <h3>{event.event_name}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      {user && (
        <button onClick={handleLike} style={{ color: event.is_liked ? 'red' : 'black' }}>
          ❤️
        </button>
      )}
    </div>
  );
};

export default EventItem;
