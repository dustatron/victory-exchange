import React from 'react';
import OldPoster4 from '../../img/OldPoster4.jpg';
import veggieBowl from '../../img/veggieBowel.jpg';
import HandOff from '../../img/HandOff.jpg';
import carrotsTable from '../../img/carrotsTable.jpg';
import VeggieOptions from '../../img/VeggieOptions.jpg';
import '../scss/_home.scss';
import { Row, Col, Container } from 'react-bootstrap';

function Home(props) {
  return (
    <React.Fragment>
      <div className='header-box'>
        <img className='header-box--img' alt='header' src={carrotsTable} />
        <div className='header-box--title'>
          <span className='header-box--tag'>Exchange Food</span>
          <span className='header-box--tag'> With Friend </span>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={6} className='row1--center'>
            <div className='row1--center-box'>
              <div className='center-box--top'>
                <h4>Share what you grow with others. </h4>
                <p>
                  Victory Exchage makes it easier for you to see what your
                  neighbors are growing and trade your extra home grown goods.
                </p>
              </div>
              <div className='center-box--bottom'>
                <p>Don’t let good food go to waste!</p>
                <h4 className='center-box--bottom-text'>Share It! </h4>
              </div>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className='row1--right'>
              <img src={veggieBowl} alt='bowl of veggies' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col mg={12} className='row2-left-col'>
            <div className='row2-left'>
              <img src={VeggieOptions} alt='veggie options' />
            </div>
          </Col>
        </Row>
        <Row>
          <Col mg={1}>
            <div className='row2-right--old-poster'>
              <img src={OldPoster4} alt='old poster' />
            </div>
          </Col>
          <Col className='row2-right' md={8}>
            <div className='row2-right-box'>
              <div className='green-box'>
                <h4> Victory Gardens </h4>
              </div>
              <p className='victory-text'>
                A vegetable, fruit, and herb gardens planted at private
                residences and public parks in the United States, United
                Kingdom, Canada, Australia and Germany during World War I and
                World War II.{' '}
                <a
                  href='https://en.wikipedia.org/wiki/Victory_garden'
                  target='_blank'
                  rel='noopener noreferrer'>
                  {' '}
                  Read More{' '}
                </a>
              </p>
              <div className='garden'>
                <img src={HandOff} alt='two sets of hands sharing veggies' />{' '}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

// Home.propTypes = {};

export default Home;
