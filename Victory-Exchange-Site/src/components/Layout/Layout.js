import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import './Layout.css';

function Layout({ children, login }) {
  return (
    <div className="background">
      <Header auth={login} />
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Layout;
