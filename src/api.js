import axios from 'axios';

const baseURL = 'https://project.taviadigitalsolusi.com/api/v1';
const authEndpoint = '/authenticate';

const api = axios.create({
  baseURL,
});

export const loginUser = async (credentials) => {
  try {
    const response = await api.post(authEndpoint, credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
