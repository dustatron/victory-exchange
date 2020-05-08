import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';

function Layout({ children, login }) {
  return (
    <Container>
      <Header auth={login} />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>{children}</Col>
      </Row>
    </Container>
  );
}

export default Layout;
