import {applyMiddleware, compose , createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import sagas from "../saga";

let composeEnhancers = compose;
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const store  = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
)

sagaMiddleware.run(sagas);

export default store;