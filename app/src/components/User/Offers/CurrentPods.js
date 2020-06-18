import React from 'react';
import { Button } from 'react-bootstrap';

function CurrentPods(props) {
  const buttonStyle = {
    margin: '5px',
  };

  return (
    <div>
      <Button
        style={buttonStyle}
        variant='outline-secondary'
        onClick={() => {
          props.onPodClick(true);
        }}>
        All Offers
      </Button>

      {props.pods.map((pod) => {
        return (
          <Button
            variant='outline-success'
            onClick={() => {
              props.onPodClick(false, pod);
            }}
            style={buttonStyle}
            key={pod.id}>
            {pod.title}
          </Button>
        );
      })}
    </div>
  );
}

export default CurrentPods;
