import { combineReducers } from "redux"
import userAuthenticationReducer from "../page/login/state/reducer";
const reducer = combineReducers({
  userAuthentication: userAuthenticationReducer
})

export default reducer;