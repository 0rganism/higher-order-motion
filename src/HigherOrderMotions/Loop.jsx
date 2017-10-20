import React from 'react';

/**Loop:
 * @param  {Number}   delay  - the delay between cycles
 * @return {Function} ?      - HOC to configure an animation to loop by managing its rest state
 */
const Loop = (delay) => (WrappedAnimation) => {
  return class LoopedAnimation extends React.Component {

    state = {
      /**
       * @type {bool} resting - whether animation is at rest.
       */
      resting: false,
    };

    /**
     * Cancel animation frame upon unmount.
     */
    componentWillUnmount() {
      cancelAnimationFrame(this._af);
    }

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
      this._af = requestAnimationFrame(() => {this.setState({resting: false})});
    };

    /**
     * Render the animation with state and onRest handler.
     */
    render() {
      return <WrappedAnimation resting={this.state.resting} onRest={this.rest} {...this.props} />;
    };
  };
};

export default Loop;
