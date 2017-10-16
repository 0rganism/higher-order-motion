import React from 'react';
import {Motion, spring} from 'react-motion';

/**
 * Animate the opacity of a box via a spring trajectory
 */
const Ease = ({children, onRest, resting}) => {
  const initialCondition = {opacity: 0};
  const trajectory = {opacity: resting ? 0 : spring(1, {stiffness: 50, damping: 50})};

  return (
    <Motion
      defaultStyle={initialCondition}
      style={trajectory}
      onRest={onRest}
      children={children}
    />
  );
};

export default Ease;
