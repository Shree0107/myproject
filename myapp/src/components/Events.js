// components/Events.js

import React from 'react';
import EventItem from './EventItem';

const Events = ({ events, user, setEvents }) => {
  return (
    <div className="events-container">
      <h2>All Events</h2>
      {events.map((event) => (
        <EventItem key={event.id} event={event} user={user} setEvents={setEvents} />
      ))}
    </div>
  );
};

export default Events;
