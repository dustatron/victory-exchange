import React from 'react';
import PropTypes from 'prop-types';

// import { MenuItem } from '../Layout/GlobalStyle';
import MenuBox from '../Shared/MenuBox';
import MenuItem from '../Shared/MenuItem';
import { Col, Row } from 'react-bootstrap';

import { Link, useRouteMatch } from 'react-router-dom';

function PodMenu(props) {
  let { path } = useRouteMatch();
  return (
    <Row>
      <Col>
        <MenuBox>
          <Link to={`${path}`}>
            <MenuItem>List</MenuItem>
          </Link>
          <Link to={`${path}/search`}>
            <MenuItem>Search</MenuItem>
          </Link>
          <Link to={`${path}/add`}>
            <MenuItem>Add</MenuItem>
          </Link>
          <Link to={`${path}/my-pods`}>
            <MenuItem>My Pods</MenuItem>
          </Link>
        </MenuBox>
      </Col>
    </Row>
  );
}

PodMenu.propTypes = {
  onMenuClick: PropTypes.func,
};

export default PodMenu;
