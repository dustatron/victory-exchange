import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

import { Card, Form, Button, Row, Col } from 'react-bootstrap';

export default function OfferEdit() {
  const thisOffer = useSelector(state => state.selectedOffer);
  const podsList = useSelector(state => state.firestore.ordered.selectedPods);
  const firestore = useFirestore();

  const handleSubmit = event => {
    event.preventDefault();
    const { title, details, img, active, pod } = event.target;
    const podName = podsList[pod.options.selectedIndex].title;

    const updateOffer = {
      title: title.value,
      details: details.value,
      img: img.value,
      active: active.value,
      podId: pod.value,
      podName: podName
    };
    firestore.update({ collection: 'offers', doc: thisOffer.offerId }, updateOffer);
    console.log(updateOffer);
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={9}>
            <h2>{thisOffer.title}</h2>
          </Col>
          <Col>Posted at: {new Date(thisOffer.createdAt).toLocaleDateString()}</Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' name='title' defaultValue={thisOffer.title} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control as='textarea' rows='3' name='details' defaultValue={thisOffer.details} />
          </Form.Group>

          <Form.Group>
            <Form.Label> Image</Form.Label>
            <Form.Control type='text' name='img' defaultValue={thisOffer.img} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Current Status : {thisOffer.active ? 'Active' : 'Close'}</Form.Label>
            <Form.Control as='select' name='active' custom>
              <option selected={thisOffer.active ? 'selected' : ''} value={true}>
                Active
              </option>
              <option selected={thisOffer.active ? '' : 'selected'} value={false}>
                Closed
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Which Pod</Form.Label>
            <Form.Control as='select' name='pod' custom>
              {podsList.map(pod => {
                return (
                  <option key={pod.id} value={pod.id}>
                    {pod.title}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
