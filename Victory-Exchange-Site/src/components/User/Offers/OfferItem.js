import React from 'react';
import OfferReplies from './OfferReplies';
import MakeReply from './MakeReply';
import { Card } from 'react-bootstrap';

function OfferItem(props) {
  return (
    <Card>
      <Card.Header>
        <h4> {props.offer.title} </h4>
      </Card.Header>
      <Card.Body>
        <OfferReplies />
        <MakeReply />
      </Card.Body>
    </Card>
  );
}

export default OfferItem;
