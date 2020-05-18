import React from 'react';
import PodUserList from './PodUserList';
import PodEdit from './PodEdit';
import { Card } from 'react-bootstrap';

function PodDetails() {
  return (
    <Card>
      <Card.Body>
        <h4> Pod Details </h4>

        <PodUserList />
        <PodEdit />
      </Card.Body>
    </Card>
  );
}

export default PodDetails;
