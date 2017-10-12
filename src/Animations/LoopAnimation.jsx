import React from 'react';
import {Motion, spring} from 'react-motion';

import Loop from '../Animators/Loop.jsx';

const Base = ({opacity}) =>
  <div style={styles.base(opacity)}>
    { opacity }
  </div>;

const BaseAnimation = ({onRest, resting}) =>
  <Motion
    defaultStyle={{opacity: 0}}
    style={{opacity: resting ? 0 : spring(1, {stiffness: 50, damping: 50})}}
    onRest={onRest}
  >
    { Base }
  </Motion>;

const LoopedBaseAnimation = Loop(200)(BaseAnimation);

export default LoopedBaseAnimation;

const styles = {
  base: (opacity) => {
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
