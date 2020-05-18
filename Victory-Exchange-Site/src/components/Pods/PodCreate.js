import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';

function PodCreate() {
  const podCollection = useFirestore().collection('pods');

  // useFirestoreConnect([ { collection: 'users' } ]);
  const currentUser = useSelector((state) => state.firebase.auth);

  function addPodtoFirestore(event) {
    event.preventDefault();
    const { title, tagLine, location, description } = event.target;
    // console.log('user', currentUser);
    const createPod = {
      title: title.value,
      tagLine: tagLine.value,
      location: tagLine.value,
      description: description.value,
      ownerId: currentUser.uid,
      ownerName: currentUser.displayName,
      owerImg: currentUser.photoURL,
      users: [ currentUser.uid ]
    };
    podCollection.add(createPod);
    console.log('pod created', createPod);
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
            <Form.Control type="text" name="description" placeholder="Give more details." defaultValue="the street" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default PodCreate;
