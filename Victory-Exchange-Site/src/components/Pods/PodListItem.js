import React from 'react';
import PropTypes from 'prop-types';

//Style
import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';
import { GlobalStyel } from '../Layout/GlobalStyle';
import styled from 'styled-components';

function PodListItem(props) {
  const { pod, onPodClick } = props;

  const CardStyle = styled.div`
    margin: 10px 0;
    box-shadow: ${GlobalStyel.shadow};
  `;

  return (
    <CardStyle key={pod.id}>
      <Card
        style={{ cursor: 'pointer' }}
        onClick={() => {
          onPodClick(pod, pod.id);
        }}>
        <Card.Header />
        <Card.Body>
          <Card.Title>{pod.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {pod.tagLine}
          </Card.Subtitle>
          <hr />
          <Row>
            <Col sm={3}>
              <Card.Img variant='top' src={pod.podImg} />
            </Col>
            <Col>
              <Card.Text>{pod.description}</Card.Text>
              <ListGroup className='list-group-flush'>
                <ListGroupItem>Location: {pod.location}</ListGroupItem>
                <ListGroupItem>
                  Created on: {new Date(pod.createdAt).toLocaleDateString()}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </CardStyle>
  );
}

PodListItem.propTypes = {
  onPodClick: PropTypes.func,
  pod: PropTypes.object,
};

export default PodListItem;
