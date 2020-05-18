import React from 'react';
import PodUserList from './PodUserList';
import PodEdit from './PodEdit';
import { Card } from 'react-bootstrap';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function PodDetails() {
  useFirestoreConnect([ { collection: 'pods' } ]);
  const podsList = useSelector((state) => state.firestore.ordered.pods);
  console.log('pods', podsList);

  const printPods = () => {
    if (isLoaded(podsList)) {
      return podsList.map((pod) => {
        return <p key={pod.id}>{pod.id}</p>;
      });
    }
  };
  return (
    <Card>
      <Card.Body>
        <h4> Pod Details </h4>
        {printPods()}
        <PodUserList />
        <PodEdit />
      </Card.Body>
    </Card>
  );
}

export default PodDetails;
