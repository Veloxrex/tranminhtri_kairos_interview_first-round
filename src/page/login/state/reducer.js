import immutable from 'immutable';
import { GET_USER_AUTHENTICATION_ERROR, GET_USER_AUTHENTICATION_REQUEST, GET_USER_AUTHENTICATION_SUCCESS } from './action';
const userInfoLocal = JSON.parse(localStorage.getItem('userInfo'))

const initialState = () => {
  const initValue = immutable.fromJS({
    userInfo: undefined,
    isLoading: undefined,
    errorMessage: undefined

  })
  return initValue
    .set('userInfo', {
      username: (userInfoLocal && userInfoLocal.userName) || undefined,
      name: (userInfoLocal && userInfoLocal.name) || undefined,
      password: undefined,
      token: (userInfoLocal && userInfoLocal.token) || null
    })
    .set('isLoading', false)
}

export default function userAuthenticationReducer(state = initialState() , action) {
  switch(action.type) {
    case GET_USER_AUTHENTICATION_REQUEST:
      return state.set('isLoading', true);
    case GET_USER_AUTHENTICATION_SUCCESS:
      const result = action.payload;
      localStorage.setItem('userInfo', JSON.stringify({
        ...result
      }));
      return state
        .set('isLoading', false)
        .update('userInfo', userInfo => {
          return {...userInfo , ...result}
        })
    case GET_USER_AUTHENTICATION_ERROR:
      localStorage.clear();
      return state
        .set('errorMessage', 'Username or password is incorrect')
        .set('isLoading', false);
    default:
      return state;
  }
}