import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
                        || compose;

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = {
    ...createStore(rootReducer, composeEnhancers(
      applyMiddleware(sagaMiddleware)
    ))
  };

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;