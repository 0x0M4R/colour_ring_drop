import React from 'react';
import { Tilt } from 'react-tilt';

const TiltBox = ({ title, description, className }) => {
  return (
    <Tilt
      options={{
        max: 25, // max tilt degree
        perspective: 1000, // perspective value
        scale: 1.05, // scale value
      }}
    >
      <div className={`box-content ${className}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Tilt>
  );
};

export default TiltBox;