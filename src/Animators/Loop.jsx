import React from 'react';
const Loop = (delay) => (Animation) => {
  return class LoopedAnimation extends React.Component {
    /**
     * We maintain the resting state for the wrapped animation.
     */
    state = {
      resting: false
    };

    /**
     * Enter resting state after animation cycle.
     */
    rest = () => {
      this.setState({resting: true}, () => setTimeout(this.reanimate, delay));
    };

    /**
     * Reanimate the component after rest.
     */
    reanimate = () => {
      requestAnimationFrame(() => {this.setState({resting: false})});
    };
    
    /**
     * Render the animation with state and onRest handler.
     */
    render() {
      return <Animation resting={this.state.resting} onRest={this.rest} {...this.props} />
    };
  };
};

export default Loop;

/**NOTE:
 * Could keep Component => Component signature by changing to:
 *
 * const loop = (delay) => (Animation) => {
 *   return class LoopedAnimation ...
 *  };
 *
 * // usage
 * loop(delay)(Animation);
 **/
