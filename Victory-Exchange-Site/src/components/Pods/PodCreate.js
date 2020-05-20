import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from '../Shared/ImagePicker';
import { Form, Button, Card } from 'react-bootstrap';

import { useFirestore } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';

function PodCreate(props) {
  const podCollection = useFirestore().collection('pods');
  const [ imageState, setImageState ] = useState('');

  // useFirestoreConnect([ { collection: 'users' } ]);
  const currentUser = useSelector(state => state.firebase.auth);
  const selectedPod = useSelector(state => state.selectedPod);
  const dispatch = useDispatch();

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
      ownerImg: currentUser.photoURL,
      podImg: img.value,
      users: [ currentUser.uid ]
    };
    podCollection.add(createPod);
    dispatch({ type: 'UPDATE_SELECTED', ...createPod });
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
            <Form.Control type='text' name='title' placeholder='Name of your Pod.' autoComplete='title' />
            <Form.Text className='text-muted'>The name of your pod should tell others about the location of your pod.</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tag Line</Form.Label>
            <Form.Control type='text' name='tagLine' placeholder='One sentence about your pod.' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type='text' name='location' placeholder='Where is your pod located?' />
            <Form.Text className='text-muted'>This could be your neighborhood, a street, or your club.</Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as='textarea' rows='3' name='description' placeholder='Give more details.' />
          </Form.Group>

          <Form.Group>
            <Form.Label>Search For an image to represent your pod</Form.Label>

            <ImagePicker updateImage={setImageState} />
            <Form.Label>Image Link</Form.Label>
            <Form.Control
              type='text'
              name='img'
              placeholder='An image to so others what this pod is all about.'
              defaultValue={imageState}
              onChange={event => {
                setImageState(event.target.value);
              }}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
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
