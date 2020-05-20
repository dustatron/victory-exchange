import React from 'react';
import PropTypes from 'prop-types';

//Style
import styled from 'styled-components';
import { GlobalStyel } from '../Layout/GlobalStyle';
import { Card, ListGroup, ListGroupItem, Spinner, Col, Row } from 'react-bootstrap';

//Datat
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function PodList(props) {
  useFirestoreConnect([ { collection: 'pods' } ]);

  const CenterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
  `;

  const CardStyle = styled.div`
    margin: 10px 0;
    box-shadow: ${GlobalStyel.shadow};
  `;

  const podsList = useSelector(state => state.firestore.ordered.pods);
  const selectedPod = useSelector(state => state.selectedPod);

  const dispatch = useDispatch();

  const hanglePodClick = (podObject, podId) => {
    const action = { type: 'UPDATE_SELECTED', ...podObject, ...{ podId: podId } };
    dispatch(action);
    // props.onPodClick(podObject);
    // console.log('podObject', podObject);
    props.upDateViewState(3);
  };

  const printPods = () => {
    if (isLoaded(podsList)) {
      return podsList.map(pod => {
        return (
          <CardStyle>
            <Card
              style={{ cursor: 'pointer' }}
              key={pod.id}
              onClick={() => {
                hanglePodClick(pod, pod.id);
              }}>
              <Card.Header />
              <Card.Body>
                <Card.Title>{pod.title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{pod.tagLine}</Card.Subtitle>
                <hr />
                <Row>
                  <Col sm={3}>
                    <Card.Img variant='top' src={pod.podImg} />
                  </Col>
                  <Col>
                    <Card.Text>{pod.description}</Card.Text>
                    <ListGroup className='list-group-flush'>
                      <ListGroupItem>Location: {pod.location}</ListGroupItem>
                      <ListGroupItem>Created on: {new Date(pod.createdAt).toLocaleDateString()}</ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </CardStyle>
        );
      });
    } else {
      return (
        <CenterItem>
          <Spinner animation='border' />
        </CenterItem>
      );
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

PodList.propTypes = {
  onPodClick: PropTypes.func,
  upDateViewState: PropTypes.func
};
export default PodList;
