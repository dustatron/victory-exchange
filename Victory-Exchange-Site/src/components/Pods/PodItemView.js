import React from 'react';
import { Card, Row, Col, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

function PodItemView(props) {
  const thisPod = useSelector((state) => state.selectedPod);
  const firestore = useFirestore();

  const deletePod = () => {
    firestore.delete({ collection: 'pods', doc: thisPod.podId });
    props.withViewState(0);
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h4> {thisPod.title} </h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {thisPod.tagLine}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col dm={3}>
            <Card.Img variant="top" src={thisPod.podImg} />
          </Col>
          <Col dm={6}>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Description: {thisPod.description}</ListGroupItem>
              <ListGroupItem>Location: {thisPod.location}</ListGroupItem>
              <ListGroupItem>Created By: {thisPod.OwnerName}</ListGroupItem>
              <ListGroupItem>Users: {thisPod.users.length}</ListGroupItem>
              <ListGroupItem>Created on: {new Date(thisPod.createdAt).toLocaleDateString()}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body>
        <Button
          variant="outline-primary"
          onClick={() => {
            props.onEditClick(1);
          }}
        >
          Edit
        </Button>
        <Button onClick={deletePod} variant="outline-danger">
          {' '}
          Delete Pod{' '}
        </Button>
      </Card.Body>
    </Card>
  );
}

PodItemView.propTypes = {
  onEditClick: PropTypes.func,
  withViewState: PropTypes.func
};

export default PodItemView;
