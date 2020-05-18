import React from 'react';
import OfferList from './Offers/OffersList';

//Styling imports
import { Card } from 'react-bootstrap';

function Dashboard() {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <h1>Dashbaord</h1>
          <OfferList />
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Dashboard;
