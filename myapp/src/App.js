// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Events from './components/Events';
import AddEvent from './components/AddEvent';

const App = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch user data if logged in
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/auth/user', { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    // Fetch events
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/"
            render={() => <Events events={events} user={user} setEvents={setEvents} />}
          />
          <Route
            exact
            path="/add-event"
            render={() => <AddEvent user={user} setEvents={setEvents} />}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
