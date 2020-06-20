import React from 'react';
import { Card, Container } from 'react-bootstrap';
import '../scss/_page-404.scss';

const Page404 = () => {
  return (
    <Container className='page-404'>
      <Card className='page-404-card'>
        <Card.Body className='page-404-card-body'>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Page404;
