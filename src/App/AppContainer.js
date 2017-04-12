import React from 'react';
import { firebaseConnect, pathToJS, dataToJS } from 'react-redux-firebase';
import { connect } from 'react-redux';
import AppComponent from './AppComponent';

const App = ({firebase, auth}) => {

  const login = () => {
    firebase.login({
      provider: 'google',
      type: 'popup'
    });
  }

  const logout = () => {
    firebase.logout();
  }

  const authed = auth && auth.uid;

  return <AppComponent
    authed = { authed }
    login = { login.bind(this) }
    logout = { logout.bind(this) }
  />
}

const wrappedApp = firebaseConnect()(App);

export default connect(({ firebase }) => {
  return {
    auth: pathToJS(firebase, 'auth')
  }
}, null)(wrappedApp);