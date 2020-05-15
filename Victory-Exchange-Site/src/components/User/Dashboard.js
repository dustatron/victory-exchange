import React from 'react';
import firebase from 'firebase';
import { Button } from 'react-bootstrap';

function Dashboard() {
  return (
    <div>
      <h1>Dashbaord</h1>
      <Button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        logout
      </Button>
    </div>
  );
}

export default Dashboard;
