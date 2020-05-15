import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import './Layout.css';

function Layout({ children, login }) {
  return (
    <div className="background">
      <Header auth={login} />

      {children}
    </div>
  );
}

export default Layout;
