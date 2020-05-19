import React from 'react';
import PropTypes from 'prop-types';
import { Form, Card, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function OfferCreate(props) {
  const offers = useFirestore().collection('offers');
  const user = useSelector(state => state.firebase.auth);
  const selectedPods = useSelector(state => state.firestore.ordered.selectedPods);

  const handleSubmit = event => {
    event.preventDefault();

    const { title, details, img, pod } = event.target;
    const podName = selectedPods[pod.options.selectedIndex].title;
    const newOffer = {
      podId: pod.value,
      podName: podName,
      authorName: user.displayName,
      authorId: user.uid,
      title: title.value,
      details: details.value,
      img: img.value,
      createdAt: Date.now(),
      replies: [],
      active: true
    };
    console.log(newOffer);
    offers.add(newOffer);
    props.updateViewState(0);
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
            <Form.Control as='textarea' rows='3' name='details' placeholder='Give us all the details.' />
          </Form.Group>

          <Form.Group>
            <Form.Label> Image</Form.Label>
            <Form.Control type='text' name='img' placeholder='image mere' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Which Pod</Form.Label>
            <Form.Control as='select' name='pod' custom>
              {selectedPods.map(pod => {
                return (
                  <option key={pod.id} value={pod.id}>
                    {pod.title}
                  </option>
                );
              })}
            </Form.Control>
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
