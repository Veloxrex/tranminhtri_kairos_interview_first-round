import immutable from 'immutable';
import { GET_USER_AUTHENTICATION_ERROR, GET_USER_AUTHENTICATION_REQUEST, GET_USER_AUTHENTICATION_SUCCESS } from '../action';
import reducer from "../reducer";
const initialStateValue = {
  name: undefined,
  password: undefined,
  token: null,
  username: undefined
}

const dataMock = {
  "createdAt": "2021-10-21T08:36:53.248Z",
  "name": "Jimmie Thompson",
  "avatar": "https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg",
  "username": "Mona_Kassulke14",
  "password": "EECsjlVnWIXfeuA",
  "token": `Mona_Kassulke14EECsjlVnWIXfeuA${Date.now()}`,
  "id": "1"
}
describe('The user authentication reducer', () => {
  const initState = immutable.fromJS({});

  test('Should return the initial state' , () => {
    const state = reducer(undefined , {});
    const expected = initState
      .set('userInfo', initialStateValue)
      .set('isLoading', false)
      .set('errorMessage', undefined)
    expect(state).toEqual(expected);
  })

  test('Get user authentication request', () => {
    const state = reducer(
      initState
      .set('userInfo', initialStateValue), {
        type: GET_USER_AUTHENTICATION_REQUEST
      }
    )
    const expected = initState
    .set('userInfo', initialStateValue)
    .set('isLoading', true)

    expect(state).toEqual(expected);
  })

  test('Get user authentication success', () => {
    const state = reducer(
      initState
      .set('userInfo', initialStateValue), {
        type: GET_USER_AUTHENTICATION_SUCCESS,
        payload: dataMock
      }
    )
    const expected = initState
      .set('userInfo', dataMock)
      .set('isLoading', false)

    expect(state).toEqual(expected);
  })

  test('Get user authentication error', () => {
    const state = reducer(
      initState
      .set('userInfo', initialStateValue), {
        type: GET_USER_AUTHENTICATION_ERROR
      }
    )
    const expected = initState
    .set('userInfo', initialStateValue)
    .set('isLoading', false)
    .set('errorMessage', 'Username or password is incorrect')
    
    expect(state).toEqual(expected);
  })
})