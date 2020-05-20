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
    props.withViewState(0);
  };

  const handleLeavePod = () => {
    if (currentUser.uid !== thisPod.ownerId) {
      //remove user from pods user list
      const newUserList = thisPod.users.filter(user => user !== currentUser.uid);
      firestore.update({ collection: 'pods', doc: thisPod.podId }, { users: [ ...newUserList ] });
      props.withViewState(0);
    }

    //remove pod from users profile
    const updateProfile = {
      ...profile,
      ...{ uid: currentUser.uid },
      ...{ pods: [ ...profile.pods.filter(pod => pod !== thisPod.id) ] }
    };
    firestore.update({ collection: 'users', doc: currentUser.uid }, updateProfile);
  };

  return (
    <Card>
      <Card.Body>
        <h4> {thisPod.title} </h4>
        <Card.Subtitle className='mb-2 text-muted'> {thisPod.tagLine}</Card.Subtitle>
        <hr />
        <Row>
          <Col md={5}>
            <Card.Img variant='top' src={thisPod.podImg} />
          </Col>
          <Col md={6}>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>Description: {thisPod.description}</ListGroupItem>
              <ListGroupItem>Location: {thisPod.location}</ListGroupItem>
              <ListGroupItem>Created By: {thisPod.ownerName}</ListGroupItem>
              <ListGroupItem>Users: {thisPod.users.length}</ListGroupItem>
              <ListGroupItem>Created on: {new Date(thisPod.createdAt).toLocaleDateString()}</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className='text-center'>
            {/* ///////////////  Join Or Leave /////////////////// */}
            {thisPod.users.includes(currentUser.uid) ? (
              <Button style={{ margin: '0 5px' }} onClick={handleLeavePod}>
                {currentUser.uid === thisPod.ownerId ? 'Admin' : 'Leave Pod'}
              </Button>
            ) : (
              <Button onClick={joinPod} variant='outline-success'>
                Joind
              </Button>
            )}

            {/* //////  EDIT  //// */}
            {currentUser.uid === thisPod.ownerId ? (
              <Button
                style={{ margin: '0 5px' }}
                variant='outline-primary'
                onClick={() => {
                  props.onEditClick(1);
                }}>
                Edit
              </Button>
            ) : (
              ''
            )}

            {/* //////  DELETE  //// */}
            {currentUser.uid === thisPod.ownerId ? (
              <Button style={{ margin: '0 5px' }} onClick={deletePod} variant='outline-danger'>
                Delete Pod
              </Button>
            ) : (
              ''
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

PodItemView.propTypes = {
  onEditClick: PropTypes.func,
  withViewState: PropTypes.func
};

export default PodItemView;
