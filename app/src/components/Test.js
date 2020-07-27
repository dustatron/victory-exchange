import React, { useEffect, useState } from 'react';
import ImageUpload from './Shared/ImageUpload';
import { Container, Card } from 'react-bootstrap';

const Test = () => {
  const [state, setState] = useState([]);
  const [alertMessage, setAlertMessage] = useState(null);

  return (
    <Container>
      <Card>
        <ImageUpload />
      </Card>
    </Container>
  );
};

export default Test;
