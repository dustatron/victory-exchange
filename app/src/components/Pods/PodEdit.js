import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ImagePicker from '../Shared/ImagePicker';
import loadingImg from '../../img/loader.gif';

import { Card, Form, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';

function PodEdit(props) {
  const selectedPod = useSelector((state) => state.selectedPod);
  const [imageState, setImageState] = useState(' ');

  const dispatch = useDispatch();
  const thisPod = useFirestore();

  useEffect(() => {
    setImageState(selectedPod.podImg);
  }, [selectedPod.podImg]);

  function updatePodOnFirestore(event) {
    event.preventDefault();
    const { title, tagLine, location, description } = event.target;
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
      podImg: imageState,
      users: [...selectedPod.users],
    };
    thisPod.update({ collection: 'pods', doc: selectedPod.podId }, updatePod);
    props.onUpdateClick(0);
    dispatch({ type: 'UPDATE_SELECTED', ...updatePod });
  }

  let imgPreview;
  if (imageState.length > 1) {
    imgPreview = imageState;
  } else {
    imgPreview = loadingImg;
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
            <Form.Control
              type='text'
              name='title'
              autoComplete='title'
              defaultValue={selectedPod.title}
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
              defaultValue={selectedPod.tagLine}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type='text'
              name='location'
              defaultValue={selectedPod.location}
            />
            <Form.Text className='text-muted'>
              This could be your neighborhood, a street, or your club.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              name='description'
              defaultValue={selectedPod.description}
            />
          </Form.Group>

          <Form.Group>
            <Card style={{ marginBottom: '10px' }}>
              <Card.Body>
                <h5 className='text-center'> Your Image </h5>
                <div className='text-center'>
                  <img
                    style={{ width: '50%' }}
                    src={imgPreview}
                    alt='pod icons'
                  />
                </div>
              </Card.Body>
            </Card>
            <h5 className='text-center'>Search for an image</h5>
            <ImagePicker
              updateImage={setImageState}
              currentLink={selectedPod.podImg}
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Update
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
PodEdit.propTypes = {
  onUpdateClick: PropTypes.func,
  withViewStat: PropTypes.func,
};

export default PodEdit;
