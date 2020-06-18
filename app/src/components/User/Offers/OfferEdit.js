import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import ImagePicker from '../../Shared/ImagePicker';
import loadingImg from '../../../img/loader.gif';
import { useHistory } from 'react-router-dom';

import { Card, Form, Button, Row, Col } from 'react-bootstrap';

export default function OfferEdit(props) {
  const history = useHistory();
  const thisOffer = useSelector((state) => state.selectedOffer);
  const podsList = useSelector((state) => state.firestore.ordered.selectedPods);
  const firestore = useFirestore();
  const [imageState, setImageState] = useState(' ');

  useEffect(() => {
    setImageState(thisOffer.img);
  }, [thisOffer.img]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, details, active, pod } = event.target;
    const podName = podsList[pod.options.selectedIndex].title;

    const updateOffer = {
      title: title.value,
      details: details.value,
      img: imageState,
      active: active.value,
      podId: pod.value,
      podName: podName,
    };
    firestore.update(
      { collection: 'offers', doc: thisOffer.offerId },
      updateOffer
    );
    return history.push('/dashboard/my-offers');
    // props.updateViewState(0);
  };

  const handleDelete = () => {
    firestore.delete({ collection: 'offers', doc: thisOffer.offerId });
    return history.push('/dashboard/my-offers');
    // props.updateViewState(0);
  };

  let imgPreview;
  if (imageState.length > 1) {
    imgPreview = imageState;
  } else {
    imgPreview = loadingImg;
  }

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col xs={9}>
            <h2>{thisOffer.title}</h2>
          </Col>
          <Col>
            Posted at: {new Date(thisOffer.createdAt).toLocaleDateString()}
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              defaultValue={thisOffer.title}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Details</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              name='details'
              defaultValue={thisOffer.details}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>
              Current Status : {thisOffer.active ? 'Active' : 'Close'}
            </Form.Label>
            <Form.Control as='select' name='active' custom>
              <option
                selected={thisOffer.active === '0' ? 'selected' : ''}
                value={0}>
                Active
              </option>
              <option
                selected={thisOffer.active === '1' ? 'selected' : ''}
                value={1}>
                Pending
              </option>
              <option
                selected={thisOffer.active === '2' ? 'selected' : ''}
                value={2}>
                Closed
              </option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Which Pod</Form.Label>
            <Form.Control as='select' name='pod' custom>
              {podsList.map((pod) => {
                return (
                  <option key={pod.id} value={pod.id}>
                    {pod.title}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Card style={{ marginBottom: '10px' }}>
              <Card.Body>
                <h5 className='text-center'> Your Image </h5>
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
            <ImagePicker updateImage={setImageState} />
          </Form.Group>
          <Row>
            <Col>
              <Button variant='primary' type='submit'>
                Update
              </Button>
            </Col>
            <Col className='text-right'>
              <Button onClick={handleDelete} variant='danger'>
                delete
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

OfferEdit.propTypes = {
  updateViewState: PropTypes.func,
};
