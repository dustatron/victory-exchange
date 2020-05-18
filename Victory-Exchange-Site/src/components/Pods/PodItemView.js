import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function PodItemView(props) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h4> {props.title} </h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {props.tagLine}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col dm={3}>
            <Card.Img variant="top" src={props.podImg} />
          </Col>
          <Col dm={6}>
            <p> {props.description}</p>
          </Col>
        </Row>
      </Card.Body>
      <Card.Body>
        <Button
          onClick={() => {
            props.onEditClick(1);
          }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

PodItemView.propTypes = {
  title: PropTypes.string,
  tagLine: PropTypes.string,
  podImg: PropTypes.string,
  description: PropTypes.string,
  onEditClick: PropTypes.func
};

export default PodItemView;
