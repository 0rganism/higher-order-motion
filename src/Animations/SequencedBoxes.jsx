import sequence from '../Animators/Sequence.jsx';
import Box from './Box.jsx';

/** S E Q U E N C E D B O X :
*
* Use sequence HOC to construct array of animations which play in sequence.
*/
const SequencedBoxes = sequence([Box, Box, Box]);

export default SequencedBoxes;
