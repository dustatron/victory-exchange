import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function CurrentPods(props) {
  const buttonStyle = {
    margin: '5px'
  };

  const handleClick = (isAll, pod) => {
    props.onPodClick(isAll, pod);
  };

  return (
    <div>
      <Button
        variant='success'
        onClick={() => {
          props.onPodClick(true);
        }}>
        All Offers
      </Button>

      {props.pods.map(pod => {
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

CurrentPods.propTypes = {};

export default CurrentPods;
