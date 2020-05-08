import React from 'react';
import firebase from 'firebase';

function Dashboard() {
  return (
    <div>
      <h1>Dashbaord</h1>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        logout
      </button>
    </div>
  );
}

export default Dashboard;
