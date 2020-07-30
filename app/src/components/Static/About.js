import React from 'react';
import '../scss/_about.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';

import ladies from '../../img/ladies.jpg';
import blueDusty from '../../img/Blue-Dusty.png';

function About() {
  return (
    <Container className='about'>
      <Row>
        <Col>
          <h1>About Victory Exchange</h1>
        </Col>
      </Row>
      {/* <Row>
        <h2 className='about-subtitle'>A Starting Place</h2>
      </Row> */}
      <Row>
        <Col md='6'>
          <div className='about-ladies-img'>
            <img src={ladies} alt='ladies eating food' />
          </div>
        </Col>
        <Col md='6'>
          <h3>Social App For Gardeners</h3>
          <p>
            This was a capstone project for my React course I took at Epicodus
            Coding Boot Camp. The idea for this site was a social network where
            users who garden can sign up for an account, search for a pod or
            group to join based on their neighborhood, and then review and post
            offers of extra produce they would like to trade.
          </p>
          <h3>Hurdles</h3>
          <p>
            This site was built with React, Redux, React-Router, Redux-firebase
            and Sass. One of the early obstacles for this site revolved around
            managing the login-state provided by Firebase, as the page would
            flash and behave erratically until a login-state was officially
            returned from Firebase. To combat this, I researched the
            redux-firebase library and discovered a hook that waits to render
            the page until the login credentials were received.
          </p>
        </Col>
      </Row>
      <Row>
        <div className='about-bar'> </div>
      </Row>
      <Row>
        <Col md='6'>
          <h3>About the sites creator</h3>
          <p>
            I am a web developer who also spent a decade in video production as
            an editor and animator. My hobbies have always included learning new
            skills and building things. Over the last few years, I have been
            making and maintaining websites for friends and organizations that
            help build community while pushing my understanding of software
            development. At the end of 2019 I decided to pursue web development
            full time.
          </p>
        </Col>
        <Col className='about-dusty' md='6'>
          <div className='about-dusty-img'>
            <img src={blueDusty} alt='web developer' />
          </div>
          <a className='about-dusty-link' href='https://www.dustymccord.com'>
            <Button className='about-dusty-link-btn'> Portfolio </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
