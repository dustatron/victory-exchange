import React from 'react';
import '../scss/_menu-item.scss';

const MenuItem = ({ children }) => {
  return <div className='menu-item'>{children}</div>;
};

export default MenuItem;
