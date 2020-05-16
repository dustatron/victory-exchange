import React from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import ProfileEdit from './Profiles/ProfileEdit';
import { Container } from 'react-bootstrap';

function UserControl() {
  return (
    <Container>
      <h1>UserControl</h1>
      <Dashboard />
      <ProfileDetails />
      <ProfileEdit />
    </Container>
  );
}

export default UserControl;
