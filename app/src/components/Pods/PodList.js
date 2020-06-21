import React from 'react';
import PropTypes from 'prop-types';
import PodListItem from './PodListItem';
import { useHistory } from 'react-router-dom';

//Style
import styled from 'styled-components';
import { Card, Spinner } from 'react-bootstrap';

//Datat
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function PodList(props) {
  useFirestoreConnect([{ collection: 'pods' }]);
  const history = useHistory();

  const CenterItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
  `;

  const podsList = useSelector((state) => state.firestore.ordered.pods);

  const dispatch = useDispatch();

  const hanglePodClick = (podObject, podId) => {
    const action = {
      type: 'UPDATE_SELECTED',
      ...podObject,
      ...{ podId: podId },
    };
    dispatch(action);
    history.push(`/findpods/my-pods/${podId}`);
  };

  const printPods = () => {
    if (isLoaded(podsList)) {
      return podsList.map((pod) => {
        return <PodListItem pod={pod} onPodClick={hanglePodClick} />;
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
      <Card.Header>
        <h4> Pod List</h4>
      </Card.Header>
      <Card.Body>{printPods()}</Card.Body>
    </Card>
  );
}

PodList.propTypes = {
  onPodClick: PropTypes.func,
};
export default PodList;
