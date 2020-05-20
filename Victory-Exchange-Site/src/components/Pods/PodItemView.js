import React from 'react';
import { Card, Row, Col, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';

function PodItemView(props) {
  const thisPod = useSelector(state => state.selectedPod);
  const profile = useSelector(state => state.firebase.profile);
  const currentUser = useSelector(state => state.firebase.auth);
  const firestore = useFirestore();

  const deletePod = () => {
    firestore.delete({ collection: 'pods', doc: thisPod.podId });
    props.withViewState(0);
  };

  const joinPod = () => {
    const updateProfile = { ...profile, ...{ uid: currentUser.uid }, ...{ pods: profile.pods ? [ ...profile.pods, thisPod.podId ] : [ thisPod.podId ] } };

    firestore.update({ collection: 'users', doc: currentUser.uid }, updateProfile);
    if (!thisPod.users.includes(currentUser.uid)) {
      firestore.update({ collection: 'pods', doc: thisPod.podId }, { users: [ ...thisPod.users, currentUser.uid ] });
    }
  };
  return (
    <Card>
      <Card.Body>
        <h4> {thisPod.title} </h4>
        <Card.Subtitle className='mb-2 text-muted'> {thisPod.tagLine}</Card.Subtitle>
        <hr />
        <Row>
          <Col dm={3}>
            <Card.Img variant='top' src={thisPod.podImg} />
          </Col>
          <Col dm={6}>
            <ListGroup className='list-group-flush'>
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
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'space-evenly' }}>
          <Button
            style={{ margin: '0 10px' }}
            variant='outline-primary'
            onClick={() => {
              props.onEditClick(1);
            }}>
            Edit
          </Button>
          <Button style={{ margin: '0 10px' }} onClick={joinPod} variant='outline-success'>
            Join Pod
          </Button>
          <Button style={{ margin: '0 10px' }} onClick={deletePod} variant='outline-danger'>
            Delete Pod
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

PodItemView.propTypes = {
  onEditClick: PropTypes.func,
  withViewState: PropTypes.func
};

export default PodItemView;
