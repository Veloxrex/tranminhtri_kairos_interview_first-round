import axios from "axios";

export const getUserAuthenticationAPI = () =>  axios.create({
  header: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
}).get('https://6164054db55edc00175c1cc9.mockapi.io/v1/auth/1')