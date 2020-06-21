import React, { useState } from 'react';
import PodSearch from './PodSearch';
import PodCreate from './PodCreate';
import PodDetails from './PodDetails';
import PodList from './PodList';
import PodMenu from './PodMenu';
import MyPods from './MyPods';
import '../scss/_pod-control.scss';

import { Container, Row, Col } from 'react-bootstrap';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

function PodsList(props) {
  let { path } = useRouteMatch();
  //////////////////// Click Handlers ////////////////////////

  const [viewState, setViewState] = useState(0);
  // const [ selectedPodState, setSelectedPodState ] = useState({}); // retire

  return (
    <Container className='pod-control'>
      <div style={{ margin: '10px 0' }}>
        <Row>
          <Col md={2}>
            <PodMenu onMenuClick={setViewState} />
          </Col>
          <Col style={{ margin: '10px 0' }} md={9}>
            <Switch>
              <Route exact path={`${path}`}>
                <PodList />
              </Route>
              <Route exact path={`${path}/search`}>
                <PodSearch />
              </Route>
              <Route exact path={`${path}/add`}>
                <PodCreate />
              </Route>
              <Route exact path={`${path}/my-pods`}>
                <MyPods />
              </Route>
              <Route exact path={`${path}/my-pods/:id`}>
                <PodDetails />
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default PodsList;
