import React from 'react';
import Header from './Header';
import './Layout.css';

function Layout({ children, login }) {
  return (
    <div className='background'>
      <Header auth={login} />

      {children}
    </div>
  );
}

export default Layout;
