import React from 'react';
import PropTypes from 'prop-types';

import { MenuBox, MenuItem } from '../Layout/GlobalStyle';
import { Col, Row } from 'react-bootstrap';

function PodMenu(props) {
  return (
    <MenuBox>
      <Row>
        <Col>
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
          <MenuItem
            onClick={() => {
              props.onMenuClick(4);
            }}>
            My Pods
          </MenuItem>
        </Col>
      </Row>
    </MenuBox>
  );
}

PodMenu.propTypes = {
  onMenuClick: PropTypes.func,
};

export default PodMenu;
