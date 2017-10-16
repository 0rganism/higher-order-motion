import React, { Component } from 'react';

import { LoopingBoxAnimation, SequencedBoxesAnimation, LoopingSequencedBoxesAnimation } from './Animations.jsx';

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
    <Animation key="Loop" label="Loop">
      <LoopingBoxAnimation />
    </Animation>,
    <Animation key="Sequence" label="Sequence">
      <SequencedBoxesAnimation />
    </Animation>,
    <Animation key="LoopingSequence" label="LoopingSequence">
      <LoopingSequencedBoxesAnimation />
    </Animation>,
  ]);
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimationGallery />
      </div>
    );
  }
}

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
