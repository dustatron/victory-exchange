import React from 'react';
import Dashboard from './Dashboard';
import ProfileDetails from './Profiles/ProfileDetails';
import ProfileEdit from './Profiles/ProfileEdit';
import MyOffers from './Offers/MyOffers';
import OfferEdit from './Offers/OfferEdit';
import OfferCreate from './Offers/OfferCreate';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

//styling
import { Container, Row, Col } from 'react-bootstrap';
import { MenuBox, MenuItem } from './../Layout/GlobalStyle';
import '../scss/_user-control.scss';

function UserControl() {
  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 1, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0%)' },
    leave: { opacity: 1, transform: 'translateY(50%)' },
  });
  // Testing nested routes
  let { path } = useRouteMatch();

  return (
    <Container className='user-control'>
      <div style={{ margin: '10px 0' }}>
        <Row>
          <Col md={2}>
            <MenuBox>
              <MenuItem>
                <Link to={`${path}`}>Offers</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`${path}/make-offer`}>Make Offer</Link>
              </MenuItem>

              <MenuItem>
                <Link to={`${path}/my-offers`}>Your Offers</Link>
              </MenuItem>

              <MenuItem>
                <Link to={`${path}/profile`}> Profile </Link>
              </MenuItem>
            </MenuBox>
          </Col>

          <Col style={{ margin: '10px 0' }} md={9}>
            <Switch>
              <Route
                exact
                path={`${path}/profile`}
                component={ProfileDetails}
              />
              <Route exact path={`${path}/my-offers`}>
                <MyOffers />
              </Route>
              <Route exact path={`${path}/make-offer`}>
                <OfferCreate />
              </Route>
              <Route exact path={`${path}`}>
                <Dashboard />
              </Route>
              <Route exact path={`${path}/edit`}>
                <OfferEdit />
              </Route>
              <Route exact path={`${path}/profile/edit`}>
                <ProfileEdit />
              </Route>
            </Switch>
            {/* {renderView(viewState)} */}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default UserControl;
