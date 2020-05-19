import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function CurrentPods(props) {
  const buttonStyle = {
    margin: '5px'
  };

  const handleClick = id => {
    props.onPodClick(id);
  };
  return (
    <div>
      {props.pods.map(pod => {
        return (
          <Button
            variant='outline-success'
            onClick={() => {
              handleClick(pod);
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
