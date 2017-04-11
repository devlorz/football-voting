import createSagaMiddleware from 'redux-saga';
import { reactReduxFirebase } from 'react-redux-firebase';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import rootReducer from './rootReducer';

import rootSaga from './rootSaga'
import { 
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET
} from './keys'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const config = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET
}

const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = {
    ...createStore(rootReducer, composeEnhancers(
      applyMiddleware(sagaMiddleware), reactReduxFirebase(config, {
        userProfile: 'users',
        profileFactory: (userData) => {
          return {
            name: userData.displayName,
            points: 0,
          }
        }
      })
    ))
  };

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;