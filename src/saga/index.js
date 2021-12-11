import {all} from "redux-saga/effects";
import userAuthenticationSaga from "../page/login/state/saga";

export default function* rootSaga() {
  yield all([
    userAuthenticationSaga()
  ])
} 