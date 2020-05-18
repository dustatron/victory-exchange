import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import GlobalStyle from '../Layout/GlobalStyle';
import GlobalStyel from '../Layout/GlobalStyle';

function PodMenu(props) {
  const MenuBox = styled.div`
    background-color: ${GlobalStyel.white};
    box-shadow: ${GlobalStyel.shadow};
    width: 100%;
    height: 30vh;
    padding: 15px 20px;
    border-radius: ${GlobalStyel.corners};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const MenuItem = styled.div`
    border-bottom: 1px solid black;
    margin: 20px 0;
    font-size: 1.6rem;
    cursor: pointer;
    justify-content: center;
  `;

  return (
    <MenuBox>
      <MenuItem
        onClick={() => {
          props.onMenuClick(0);
        }}
      >
        List
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.onMenuClick(1);
        }}
      >
        Search
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.onMenuClick(2);
        }}
      >
        Add
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.onMenuClick(3);
        }}
      >
        Details
      </MenuItem>
    </MenuBox>
  );
}

PodMenu.propTypes = {
  onMenuClick: PropTypes.func
};

export default PodMenu;
