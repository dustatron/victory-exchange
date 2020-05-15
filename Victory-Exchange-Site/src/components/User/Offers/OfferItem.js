import React from 'react';
import OfferReplies from './OfferReplies';
import MakeReply from './MakeReply';
import { Card } from 'react-bootstrap';

function OfferItem() {
  return (
    <Card>
      <Card.Body>
        <h4> Offer Item </h4>
        <OfferReplies />
        <MakeReply />
      </Card.Body>
    </Card>
  );
}

export default OfferItem;
