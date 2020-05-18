import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'react-bootstrap';

import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function PodCreate(props) {
  const podCollection = useFirestore().collection('pods');

  // useFirestoreConnect([ { collection: 'users' } ]);
  const currentUser = useSelector((state) => state.firebase.auth);

  function addPodtoFirestore(event) {
    event.preventDefault();
    const { title, tagLine, location, description, img } = event.target;

    const createPod = {
      createdAt: Date.now(),
      title: title.value,
      tagLine: tagLine.value,
      location: location.value,
      description: description.value,
      ownerId: currentUser.uid,
      ownerName: currentUser.displayName,
      owerImg: currentUser.photoURL,
      podImg: img.value,
      users: [ currentUser.uid ]
    };
    podCollection.add(createPod);
    props.updateSelectedPodState(createPod);
    props.updateViewState(3);
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Pod Create</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={addPodtoFirestore}>
          <Form.Group>
            <Form.Label>Pod Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Name of your Pod."
              autoComplete="title"
              defaultValue="Chautauqua street"
            />
            <Form.Text className="text-muted">
              The name of your pod should tell others about the location of your pod.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tag Line</Form.Label>
            <Form.Control
              type="text"
              name="tagLine"
              placeholder="One sentence about your pod."
              defaultValue="street lovers"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Where is your pod located?"
              defaultValue="Kenton and portsmouth"
            />
            <Form.Text className="text-muted">This could be your neighborhood, a street, or your club.</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Give more details."
              defaultValue="We really want people to join us in sharing good food from the street."
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Pod Image</Form.Label>
            <Form.Control
              type="text"
              name="img"
              placeholder="An image to so others what this pod is all about."
              defaultValue="https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

PodCreate.propTypes = {
  updateViewState: PropTypes.func,
  updateSelectedPodState: PropTypes.func
};

export default PodCreate;
