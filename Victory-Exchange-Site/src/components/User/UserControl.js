import React from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import ProfileEdit from './Profiles/ProfileEdit';

function UserControl() {
  return (
    <div>
      <h1>UserControl</h1>
      <Dashboard />
      <ProfileDetails />
      <ProfileEdit />
    </div>
  );
}

export default UserControl;
