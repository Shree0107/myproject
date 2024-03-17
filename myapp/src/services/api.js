// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getUsers = () => {
  return axios.get(`${API_URL}/users/`);
};

export const getEvents = () => {
  return axios.get(`${API_URL}/events/`);
};
