import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

const AppComponent = ({authed, login, logout}) => {
  const authButtons = authed ?
    <a href="#" onClick={logout}>Logout</a> :
    <a href="#" onClick={login}>Login</a>;

  const profileLink = authed ?
    <Link to="/profile">Profile</Link> : "";

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" className="App-logo"/>
        <h2>Welcome to Voteball</h2>
      </div>
      <div className="nav">
        <Link to="/">Games</Link>
        {profileLink}
        {authButtons}
      </div>
    </div>
  )
};

export default AppComponent;