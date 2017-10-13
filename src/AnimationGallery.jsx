import React from 'react';

import Ellipses from './Animations/Ellipses.jsx';
import LoopingBox from './Animations/LoopingBox.jsx';
import SequencedBoxes from './Animations/SequencedBoxes.jsx';

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
    <Animation key="Ellipses" label="Ellipses V1">
      <Ellipses />
    </Animation>,
    <Animation key="Loop" label="Loop">
      <LoopingBox />
    </Animation>,
    <Animation key="Sequence" label="Sequence">
      <SequencedBoxes />
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
