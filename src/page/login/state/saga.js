import { put, takeLatest } from "redux-saga/effects";
import { getUserAuthenticationError, getUserAuthenticationSuccess, GET_USER_AUTHENTICATION_REQUEST } from "./action";
import { getUserAuthenticationAPI } from "./api";


export function* checkUserAuthentication(formData) {
  try{
    const inputData = formData.payload;
    const result = yield getUserAuthenticationAPI();
    const checkUsername = inputData.username === result.data.username;
    const checkPassword = inputData.password === result.data.password;
    if(checkUsername && checkPassword){
      result.data.token  = `${result.data.username}${result.data.password}${Date.now()}`;
      delete result.password;
      yield put(getUserAuthenticationSuccess(result.data))
    }else{
      yield put(getUserAuthenticationError())
    }
  } catch(error) {
    console.log(error)
  }
}

export default function* userAuthenticationSaga() {
  yield takeLatest(GET_USER_AUTHENTICATION_REQUEST, checkUserAuthentication);
}