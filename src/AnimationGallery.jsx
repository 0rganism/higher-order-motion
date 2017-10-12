import React from 'react';

import EllipsesAnimation from './Animations/EllipsesAnimation.jsx';
import LoopAnimation from './Animations/LoopAnimation.jsx';

const Animation = ({children, label}) => {
  return (
    <div style={styles.Animation}>
      <div style={styles.Title}>{ label }</div>
      {children}
    </div>
  );
};

const AnimationGallery = () => {
  return ([
    <Animation label="Ellipses V1">
      <EllipsesAnimation />
    </Animation>,
    <Animation label="Loop">
      <LoopAnimation />
    </Animation>
  ]);
};

export default AnimationGallery;

const styles = {
  Animation: {
    height: '400px',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: '16px',
    backgroundColor: 'rgb(42, 144, 150)',
    color: 'rgb(238, 191, 69)'
  },
  Title: {
    fontSize: '3vmax'
  }
}
