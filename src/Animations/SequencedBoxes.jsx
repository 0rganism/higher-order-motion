import sequence from '../Animators/Sequence.jsx';
import Box from './Box.jsx';

const SequencedBoxes = sequence([Box, Box, Box]);

export default SequencedBoxes;
