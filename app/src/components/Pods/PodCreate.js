import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImagePicker from '../Shared/ImagePicker';
import { Form, Button, Card } from 'react-bootstrap';

import noImage from '../../img/no-image.svg';
import { useHistory } from 'react-router-dom';

import { useFirestore } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';

function PodCreate(props) {
  const history = useHistory();
  const podCollection = useFirestore().collection('pods');
  const [imageState, setImageState] = useState('');

  // useFirestoreConnect([ { collection: 'users' } ]);
  const currentUser = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  async function addPodtoFirestore(event) {
    event.preventDefault();
    const { title, tagLine, location, description } = event.target;

    const createPod = {
      createdAt: Date.now(),
      title: title.value,
      tagLine: tagLine.value,
      location: location.value,
      description: description.value,
      ownerId: currentUser.uid,
      ownerName: currentUser.displayName,
      ownerImg: currentUser.photoURL,
      podImg: imageState,
      users: [currentUser.uid],
    };
    podCollection.add(createPod);
    await dispatch({ type: 'UPDATE_SELECTED', ...createPod });
    history.push(`/findpods/`);
  }

  let imgPreview;
  if (imageState.length > 1) {
    imgPreview = imageState;
  } else {
    imgPreview = noImage;
  }

  return (
    <Card>
      <Card.Header>
        <h4>Pod Create</h4>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={addPodtoFirestore}>
          <Form.Group>
            <Form.Label>Pod Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='Name of your Pod.'
              autoComplete='title'
            />
            <Form.Text className='text-muted'>
              The name of your pod should tell others about the location of your
              pod.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tag Line</Form.Label>
            <Form.Control
              type='text'
              name='tagLine'
              placeholder='One sentence about your pod.'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              name='location'
              placeholder='Where is your pod located?'
            />
            <Form.Text className='text-muted'>
              This could be your neighborhood, a street, or your club.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              name='description'
              placeholder='Give more details.'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Search For an image to represent your pod</Form.Label>

            <Card style={{ marginBottom: '10px' }}>
              <Card.Body>
                <h5 className='text-center'> Your Image </h5>
                <div className='text-center'>
                  <img
                    style={{ width: '50%' }}
                    src={imgPreview}
                    alt='loaded pod icon'
                  />
                </div>
              </Card.Body>
            </Card>
            <h5 className='text-center'>Search for an image</h5>
            <ImagePicker updateImage={setImageState} />
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
  updateSelectedPodState: PropTypes.func,
};

export default PodCreate;
