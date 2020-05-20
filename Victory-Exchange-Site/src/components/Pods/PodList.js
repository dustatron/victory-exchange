import React from 'react';
import PropTypes from 'prop-types';
import PodListItem from './PodListItem';

//Style
import styled from 'styled-components';
import { Card, Spinner } from 'react-bootstrap';

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

  const podsList = useSelector(state => state.firestore.ordered.pods);

  const dispatch = useDispatch();

  const hanglePodClick = (podObject, podId) => {
    const action = { type: 'UPDATE_SELECTED', ...podObject, ...{ podId: podId } };
    dispatch(action);
    props.upDateViewState(3);
  };

  const printPods = () => {
    if (isLoaded(podsList)) {
      return podsList.map(pod => {
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
