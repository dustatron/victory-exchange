import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import PodListItem from './PodListItem';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MyPods(props) {
  const allPods = useSelector((state) => state.firestore.ordered.pods);
  const currentUser = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const [myPodsState, setMyPodsState] = useState([]);

  const hanglePodClick = (podObject, podId) => {
    const action = {
      type: 'UPDATE_SELECTED',
      ...podObject,
      ...{ podId: podId },
    };
    dispatch(action);
    history.push(`/findpods/my-pods/${podId}`);
  };

  useEffect(() => {
    if (!allPods) {
      history.push('/findpods');
    } else if (myPodsState.length === 0) {
      const myPods = allPods.filter((pod) => pod.ownerId === currentUser.uid);
      setMyPodsState(myPods);
    }
    // eslint-disable-next-line
  }, [currentUser.uid, myPodsState.length, allPods]);

  return (
    <Card>
      <Card.Header>
        <h4>My Pods</h4>
      </Card.Header>
      <Card.Body>
        {myPodsState.map((pod) => {
          return <PodListItem pod={pod} onPodClick={hanglePodClick} />;
        })}
      </Card.Body>
    </Card>
  );
}

MyPods.propTypes = {
  updateViewState: PropTypes.func,
};

export default MyPods;
