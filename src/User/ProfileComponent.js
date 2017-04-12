import React from 'react';
import './User.css';

const ProfileComponent = ({ profile }) => (
  <div className="profile">
    <h2>{profile.name}</h2>
    <h4>you have {profile.points} points</h4>
  </div>
);

export default ProfileComponent;