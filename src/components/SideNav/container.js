import React from 'react';
import './index.css'; 

const ContainerComponent = ({ children }) => {
  return (
    <div className="container ui clearing segment">{children}</div>
  );
};

export default ContainerComponent;