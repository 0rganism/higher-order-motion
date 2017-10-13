import React from 'react';
import {Motion, spring} from 'react-motion';

/**
 * Animate the opacity of a box via a spring trajectory
 */
const BoxAnimation = ({onRest, resting}) => {
  const initialCondition = {opacity: 0};
  const trajectory = {opacity: resting ? 0 : spring(1, {stiffness: 50, damping: 50})};

  return (
    <Motion
      defaultStyle={initialCondition}
      style={trajectory}
      onRest={onRest}
    >
      { position => <Box {...position} /> }
    </Motion>
  );
};

/**
 * A simple box, with opacity driven by a prop.
 */
const Box = ({opacity}) =>
  <div style={styles.box(opacity)}>
    { opacity }
  </div>;

export default BoxAnimation;

/**
 * Box component styles
 */
const styles = {
  box: (opacity) => {
    return {
      opacity: `${opacity}`,
      margin: '16px',
      width: '50%',
      height: '50%',
      backgroundColor: 'rgb(238, 191, 69)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'rgb(42, 144, 150)',
      fontFamily: 'Libre Barcode 39 Extended Text',
      fontSize: '5vmin'
    };
  }
};
