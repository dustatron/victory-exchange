import React from 'react';
import PropTypes from 'prop-types';

import { GlobalStyel, MenuBox, MenuItem } from '../Layout/GlobalStyle';

function PodMenu(props) {
  return (
    <MenuBox>
      <MenuItem
        onClick={() => {
          props.onMenuClick(0);
        }}>
        List
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.onMenuClick(1);
        }}>
        Search
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.onMenuClick(2);
        }}>
        Add
      </MenuItem>
      {/* <MenuItem
        onClick={() => {
          props.onMenuClick(3);
        }}
      >
        Details
      </MenuItem> */}
    </MenuBox>
  );
}

PodMenu.propTypes = {
  onMenuClick: PropTypes.func
};

export default PodMenu;
