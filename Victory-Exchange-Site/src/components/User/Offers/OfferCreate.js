import React from 'react';
import PropTypes from 'prop-types';
import { Form, Card, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OfferCreate(props) {
  const offers = useFirestore().collection('offers');
  const user = useSelector(state => state.firebase.auth);
  const handleSubmit = event => {
    event.preventDefault();
    const { title, details, img } = event.target;
    const newOffer = {
      podId: '7aJq6jRsca4vt2VLAhFH',
      authorName: user.displayName,
      authorId: user.uid,
      title: title.value,
      detials: details.value,
      img: img.value,
      createdAt: Date.now(),
      replies: [],
      active: true
    };

    offers.add(newOffer);
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title>New Offer</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' name='title' placeholder='Name of your Pod.' autoComplete='title' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control type='text-area' name='details' placeholder='Give us all the details.' />
          </Form.Group>

          <Form.Group>
            <Form.Label> Image</Form.Label>
            <Form.Control type='text' name='img' placeholder='image mere' />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

OfferCreate.propTypes = {};

export default OfferCreate;
