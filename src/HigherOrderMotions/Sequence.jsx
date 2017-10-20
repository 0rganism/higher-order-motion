import React from 'react';

/** Sequence:
 * Produces a composable component from an array of Animation components.
 *
 * @param {Array<Component>} WrappedAnimations   : An array of components, with onRest event
 *
 * @return {React.Component}        SequencedAnimations : An array of components, with onRest event handled
 */
const sequence = (WrappedAnimations) => {
  return class SequencedAnimations extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        /**
         * @type {boolean} - whether sequence is at rest.
         */
        resting: false,
        /**
         * @type {number} - index of active animation in sequence.
         */
        pointer: 0
      };
    }

    /**
     * Update resting state in response to props.
     * @param {boolean} - resting - whether sequence is at rest.
     */
    componentWillReceiveProps({resting}) {
      if (this.props.resting !== resting) {
        this.setState({
          resting: resting
        });
      }
    };

    /**
     * Clear our animation frame on unmount.
     */
    componentWillUnmount() {
      cancelAnimationFrame(this._af);
    }

    /**
     * Handle when an animation in the sequence comes to rest.
     * @param {number} idx - the index of the child animation which has come to rest.
     */
    onRest = (idx) => {
      // ignore calls from already handled animations
      // https://github.com/chenglou/react-motion/issues/348
      if (idx < this.state.pointer) return;

      const next = (this.state.pointer + 1) % WrappedAnimations.length;
      this._af = requestAnimationFrame(() => {
        this.setState({
          resting: !next,
          pointer: next
        }, () => {
          // trigger onRest callback if one exists
          this.state.resting && this.props.onRest && this.props.onRest()
        })
      });
    };

    /**
     * Render the sequence of animations with corresponding resting states.
     * @return {Array<Component>} - animations in the sequence.
     */
    render() {
      const {resting, pointer} = this.state;

      return (
        resting || WrappedAnimations.map((Animation, index) => {
          return (
            <Animation
              key={index}
              resting={!(index === pointer)}
              onRest={() => this.onRest(index)}
            />
          )
        })
      );
    };
  };
};

export default sequence;
