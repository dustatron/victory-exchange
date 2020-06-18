import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import PodListItem from './PodListItem';

function MyPods(props) {
  const allPods = useSelector((state) => state.firestore.ordered.pods);
  const currentUser = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();

  const [myPodsState, setMyPodsState] = useState([]);

  const hanglePodClick = (podObject, podId) => {
    const action = {
      type: 'UPDATE_SELECTED',
      ...podObject,
      ...{ podId: podId },
    };
    dispatch(action);
    props.updateViewState(3);
  };

  useEffect(() => {
    if (myPodsState.length === 0) {
      const myPods = allPods.filter((pod) => pod.ownerId === currentUser.uid);
      setMyPodsState(myPods);
    }
  }, [currentUser.uid, myPodsState.length, allPods]);

  return (
    <div>
      My Pods{' '}
      {myPodsState.map((pod) => {
        return <PodListItem pod={pod} onPodClick={hanglePodClick} />;
      })}
    </div>
  );
}

MyPods.propTypes = {
  updateViewState: PropTypes.func,
};

export default MyPods;
