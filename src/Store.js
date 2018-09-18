import reducerSwitch from './reducers';
import createSagaMiddleware from 'redux-saga';

import { createStore,  applyMiddleware } from 'redux';
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
  reducerSwitch,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga); // run saga

export default Store;