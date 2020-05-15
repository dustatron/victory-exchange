import React from 'react';
import OldPoster4 from '../../img/OldPoster4.jpg';
import veggieBowl from '../../img/veggieBowel.jpg';
import oldPoster from '../../img/oldPoster.jpg';
import carrotsTable from '../../img/carrotsTable.jpg';
import VeggieOptions from '../../img/VeggieOptions.jpg';
import './home.css';
import { Row, Col } from 'react-bootstrap';

function Home(props) {
  return (
    <React.Fragment>
      <div className="header-box">
        <img className="header-box--img" src={carrotsTable} />
        <div className="header-box--title">
          <span className="header-box--tag">Exchange Food</span>
          <span className="header-box--tag"> With Friend </span>
        </div>
      </div>
      <Row>
        <Col className="row1--left-img" sm={0} md={{ span: 2, offset: 1 }}>
          <img src={oldPoster} />
        </Col>
        <Col md={3} sm={12} className="row1--center">
          <div className="row1--center-box">
            <div className="center-box--top">
              <h4>Share what you grow with others. </h4>
              <p>
                Victory Exchage makes it easier for you to see what your neighbors are growing and trade your extra home
                grown goods.
              </p>
            </div>
            <div className="center-box--bottom">
              <p>Don’t let Good food go to waist!</p>
              <h4 className="center-box--bottom-text">Share It! </h4>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="row1--right">
            <img src={veggieBowl} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 1 }} className="row2-left-col">
          <div className="row2-left">
            <img src={VeggieOptions} />
          </div>
        </Col>
        <Col className="row2-right">
          <div className="row2-right-box">
            <Row>
              <Col sm={5}>
                <h4> Victory Gardens </h4>
                <p className="victory-text">
                  A vegetable, fruit, and herb gardens planted at private residences and public parks in the United
                  States, United Kingdom, Canada, Australia and Germany during World War I and World War II.{' '}
                  <a href="https://en.wikipedia.org/wiki/Victory_garden" target="_blank">
                    {' '}
                    Read More{' '}
                  </a>
                </p>
              </Col>
              <Col>
                <div className="row2-right--old-poster">
                  <img src={OldPoster4} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}

// Home.propTypes = {};

export default Home;
