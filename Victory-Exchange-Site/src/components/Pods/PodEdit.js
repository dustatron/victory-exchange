import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Form, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';

function PodEdit(props) {
  const selectedPod = useSelector((state) => state.selectedPod);
  const dispatch = useDispatch();
  const thisPod = useFirestore();

  function updatePodOnFirestore(event) {
    event.preventDefault();
    const { title, tagLine, location, description, img } = event.target;
    const updatePod = {
      podId: selectedPod.podId,
      createdAt: selectedPod.createdAt,
      title: title.value,
      tagLine: tagLine.value,
      location: location.value,
      description: description.value,
      ownerId: selectedPod.ownerId,
      ownerName: selectedPod.ownerName,
      ownerImg: selectedPod.ownerImg,
      podImg: img.value,
      users: [ ...selectedPod.users ]
    };
    thisPod.update({ collection: 'pods', doc: selectedPod.podId }, updatePod);
    props.onUpdateClick(0);
    dispatch({ type: 'UPDATE_SELECTED', ...updatePod });
  }
  return (
    <Card>
      <Card.Header>
        <Card.Title>Edit Pod Details</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={updatePodOnFirestore}>
          <Form.Group>
            <Form.Label>Pod Title</Form.Label>
            <Form.Control type="text" name="title" autoComplete="title" defaultValue={selectedPod.title} />
            <Form.Text className="text-muted">
              The name of your pod should tell others about the location of your pod.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tag Line</Form.Label>
            <Form.Control type="text" name="tagLine" defaultValue={selectedPod.tagLine} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" defaultValue={selectedPod.location} />
            <Form.Text className="text-muted">This could be your neighborhood, a street, or your club.</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" defaultValue={selectedPod.description} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Pod Image</Form.Label>
            <Form.Control type="text" name="img" defaultValue={selectedPod.podImg} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
PodEdit.propTypes = {
  onUpdateClick: PropTypes.func,
  withViewStat: PropTypes.func
};

export default PodEdit;
