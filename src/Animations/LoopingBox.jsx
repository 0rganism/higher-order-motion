/** L O O P I N G B O X :
*
* Use loop HOC to construct looping version of the animated Box component.
*
*/
import loop from '../Animators/Loop.jsx';
import Box from './Box.jsx';

const looping = loop(1000);
const LoopingBox= looping(Box);

export default LoopingBox;
