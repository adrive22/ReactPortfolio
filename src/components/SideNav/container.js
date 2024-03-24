import React from 'react';
import './index.css'; // Import the CSS file for styling

const ContainerComponent = ({ children }) => {
  return (
    <div className="container ui clearing segment">{children}</div>
  );
};

export default ContainerComponent;