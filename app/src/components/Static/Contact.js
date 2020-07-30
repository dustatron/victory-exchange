import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import '../scss/_contact.scss';

function Contact() {
  return (
    <Container className='contact'>
      <Row>
        <Col md={{ span: '8', offset: '2' }}>
          <Jumbotron>
            <h1>Contact</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <a href='https://www.dustymccord.com'>
                <Button variant='primary' className='contact-btn'>
                  Portfolio
                </Button>
              </a>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
