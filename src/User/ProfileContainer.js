import React from 'react';
import { connect } from 'react-redux';
import { pathToJS, firebaseConnect} from 'react-redux-firebase';

import ProfileComponent from './ProfileComponent';

const ProfileContainer = ({profile}) => (
  <ProfileComponent profile={profile} />
);

const mapStateToProps = ({firebase}) => {
  return {
    profile: pathToJS(firebase, 'profile') || {}
  }
};

export default connect(mapStateToProps, null)(ProfileContainer);