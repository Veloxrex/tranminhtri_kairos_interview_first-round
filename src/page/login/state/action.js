export const GET_USER_AUTHENTICATION_SUCCESS = 'GET_USER_AUTHENTICATION_SUCCESS';
export const GET_USER_AUTHENTICATION_REQUEST = 'GET_USER_AUTHENTICATION_REQUEST';
export const GET_USER_AUTHENTICATION_ERROR = 'GET_USER_AUTHENTICATION_ERROR';
export const getUserAuthenticationRequest = (payload) => ({
  type: GET_USER_AUTHENTICATION_REQUEST,
  payload
});

export const getUserAuthenticationSuccess = (payload) => ({
  type: GET_USER_AUTHENTICATION_SUCCESS,
  payload
});

export const getUserAuthenticationError = () => ({
  type: GET_USER_AUTHENTICATION_ERROR
})
