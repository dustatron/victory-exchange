import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OfferReplies from './OfferReplies';
import MakeReply from './MakeReply';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

// Data
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

import { v4 } from 'uuid';
import { Card, Row, Col, ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { GlobalStyel } from '../../Layout/GlobalStyle';
import { updateSelectedOffer } from '../../../actions/offer-actions';

function OfferItem({ offer, updateSelectedOffer }) {
  useFirestoreConnect([{ collection: 'pods' }]);
  const podsList = useSelector((state) => state.firestore.ordered.pods);
  const user = useSelector((state) => state.firebase.auth);

  const dispatch = useDispatch();
  const history = useHistory();
  const [showReply, setShowReply] = useState(false);

  const Spacer = styled.div`
    margin: 15px 0;
    box-shadow: ${GlobalStyel.shadow};
  `;
  const handleEditButton = () => {

    updateSelectedOffer(offer, offer.id);
    return history.push('/dashboard/edit');
  };

  const handlePodClick = (id) => {
    const podObject = podsList.filter(pod => pod.podId === id)
    console.log('pod', podObject)
     const action = {
       type: 'UPDATE_SELECTED',
       ...podObject[0],
       ...{ podId: id },
     };
     dispatch(action);
     history.push(`/dashboard/pod-details/${id}`);
  }

  let renderEditButton;
  let status = () => {
    switch (offer.active) {
      case '0':
        return 'Active';
      case '1':
        return 'Pending';
      case '2':
        return 'closed';
      default:
        return 'Active';
    }
  };

  if (offer.authorId === user.uid) {
    renderEditButton = (
      <Button onClick={handleEditButton} variant='warning'>
        Edit
      </Button>
    );
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
          <Row>
            <Col
              sm={12}
              md={{ span: 10, offset: 1 }}
              style={{ margin: '10px auto' }}>
              <ListGroup horizontal={'lg'}>
                <ListGroup.Item style={{cursor: 'pointer'}}
                  onClick={() => {
                    handlePodClick(offer.podId);
                  }}>
                  Pod : {offer.podName}
                </ListGroup.Item>
                <ListGroup.Item>
                  Posted on : {new Date(offer.createdAt).toLocaleDateString()}
                </ListGroup.Item>
                <ListGroup.Item>Posted by : {offer.authorName}</ListGroup.Item>
                <ListGroup.Item>{status()}</ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant='success'
                    onClick={() => {
                      setShowReply(!showReply);
                    }}>
                    Reply ({offer.replies.length})
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={{ span: 10, offset: 1 }}>
              {showReply ? (
                <div>
                  <OfferReplies replies={offer.replies} />
                  <hr />
                  <MakeReply offerId={offer.id} offerReplies={offer.replies} />
                </div>
              ) : (
                <div />
              )}
            </Col>
          </Row>

          {/* <MakeReply /> */}
        </Card.Body>
      </Card>
    </Spacer>
  );
}

OfferItem.propTypes = {
  onUpdateViewState: PropTypes.func,
  offer: PropTypes.object,
};
export default connect(null, { updateSelectedOffer })(OfferItem);
