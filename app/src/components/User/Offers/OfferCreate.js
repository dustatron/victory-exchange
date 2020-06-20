import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ImagePicker from '../../Shared/ImagePicker';
import { Form, Card, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import noImage from '../../../img/no-image.svg';

function OfferCreate(props) {
  const offers = useFirestore().collection('offers');
  const user = useSelector((state) => state.firebase.auth);
  const selectedPods = useSelector(
    (state) => state.firestore.ordered.selectedPods
  );

  const history = useHistory();

  const [imageState, setImageState] = useState(' ');

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, details, pod } = event.target;
    const podName = selectedPods[pod.options.selectedIndex].title;
    const newOffer = {
      podId: pod.value,
      podName: podName,
      authorName: user.displayName,
      authorId: user.uid,
      title: title.value,
      details: details.value,
      img: imageState,
      createdAt: Date.now(),
      replies: [],
      active: 0,
    };
    console.log(newOffer);
    offers.add(newOffer);
    return history.push('/dashboard/my-offers');
  };

  let imgPreview;
  if (imageState.length > 1) {
    imgPreview = imageState;
  } else {
    imgPreview = noImage;
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>New Offer</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              placeholder='Name of your Pod.'
              autoComplete='title'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              name='details'
              placeholder='Give us all the details.'
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Which Pod</Form.Label>
            <Form.Control as='select' name='pod' custom>
              {selectedPods ? (
                selectedPods.map((pod) => {
                  return (
                    <option key={pod.id} value={pod.id}>
                      {pod.title}
                    </option>
                  );
                })
              ) : (
                <Redirect to='/dashboard' />
              )}
            </Form.Control>
          </Form.Group>

          <Form.Group className='text-center'>
            <Card style={{ marginBottom: '10px' }}>
              <Card.Body>
                <h5 className='text-center'>
                  {imageState.length > 1 ? 'Your image' : 'Pick an image'}
                </h5>
                <div className='text-center'>
                  <img
                    style={{ width: '50%' }}
                    src={imgPreview}
                    alt='preview'
                  />
                </div>
              </Card.Body>
            </Card>
            <h5 className='text-center'>Search for an image</h5>
            <Form.Label>Search for an image</Form.Label>
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

export default OfferCreate;
