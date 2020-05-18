import React from 'react';

import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function PodList() {
  useFirestoreConnect([ { collection: 'pods' } ]);
  const podsList = useSelector((state) => state.firestore.ordered.pods);
  const printPods = () => {
    if (isLoaded(podsList)) {
      return podsList.map((pod) => {
        return (
          <Card style={{ width: '18rem' }} key={pod.id}>
            <Card.Img variant="top" src={pod.podImg} />
            <Card.Body>
              <Card.Title>{pod.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{pod.tagLine}</Card.Subtitle>
              <Card.Text>{pod.description}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Location: {pod.location}</ListGroupItem>
                <ListGroupItem>Created By: {pod.ownerName}</ListGroupItem>
                <ListGroupItem>Users: {pod.users.length}</ListGroupItem>
                <ListGroupItem>Created on: {new Date(pod.createdAt).toLocaleDateString()}</ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        );
      });
    }
  };
  return (
    <Card>
      <Card.Body>
        <h4> Pod List</h4>
        {printPods()}
      </Card.Body>
    </Card>
  );
}

export default PodList;
