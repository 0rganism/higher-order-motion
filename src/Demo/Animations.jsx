import React from 'react';

import loop from '../HigherOrderMotions/Loop.jsx';
import sequence from '../HigherOrderMotions/Sequence.jsx';

import Ease from '../Motions/Ease.jsx';

import Box from '../Pure/Box.jsx';

/** L O O P I N G B O X :
*
* Use loop HOC to construct looping version of the animated Box component.
*
*/
const LoopingEase = loop(1000)(Ease);

export const LoopingBoxAnimation = (props) =>
  <LoopingEase {...props}>
    { position => <Box {...position} /> }
  </LoopingEase>;


/** S E Q U E N C E D B O X :
*
* Use sequence HOC to construct array of animations which play in sequence.
*/
const EasingBox = (props) =>
  <Ease {...props}>
    { position => <Box {...position} /> }
  </Ease>;

export const SequencedBoxesAnimation = sequence([EasingBox, EasingBox, EasingBox]);
