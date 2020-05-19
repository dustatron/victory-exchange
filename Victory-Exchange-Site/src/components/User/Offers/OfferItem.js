import React from 'react';
import PropTypes from 'prop-types';
import OfferReplies from './OfferReplies';
import MakeReply from './MakeReply';
import { useSelector, useDispatch } from 'react-redux';

import { v4 } from 'uuid';
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { GlobalStyel } from '../../Layout/GlobalStyle';

function OfferItem(props) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.firebase.auth);
  // const pods = useSelector(state => state.firebase.)

  const Spacer = styled.div`
    margin: 15px 0;
    box-shadow: ${GlobalStyel.shadow};
  `;

  const { offer } = props;
  const handleEditButton = () => {
    const action = { type: 'UPDATE_SELECT_OFFER', ...offer, ...{ offerId: offer.id } };
    dispatch(action);
    props.onUpdateViewState(4);
  };

  let renderEditButton;

  if (offer.authorId === user.uid) {
    renderEditButton = <Button onClick={handleEditButton}> Edit </Button>;
  }

  return (
    <Spacer key={v4()}>
      <Card>
        <Card.Header>
          <Row>
            <Col sm={10}>
              <h4> {offer.title} </h4>
            </Col>
            <Col className='text-right'>{renderEditButton}</Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col sm={4}>
              <Card.Img src={offer.img} />
            </Col>
            <Col>
              <ListGroup variant='flush'>
                <ListGroup.Item>Posted by: {offer.authorName}</ListGroup.Item>
                <ListGroup.Item>{offer.details}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <ListGroup horizontal={'md'}>
            <ListGroup.Item>Pod : {offer.podName}</ListGroup.Item>
            <ListGroup.Item>Posted on : {new Date(offer.createdAt).toLocaleDateString()}</ListGroup.Item>
            <ListGroup.Item>Status : {offer.active ? 'Still available' : 'Closed'}</ListGroup.Item>
            <ListGroup.Item>
              <OfferReplies replies={offer.replies} />
            </ListGroup.Item>
          </ListGroup>

          {/* <MakeReply /> */}
        </Card.Body>
      </Card>
    </Spacer>
  );
}

OfferItem.propTypes = {
  onUpdateViewState: PropTypes.func
};
export default OfferItem;
