const Loop = (Animation, delay) => {
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
      this.setState({resting: true}, () => this.pause(this.reanimate));
    };

    /**
     * Reanimate the component after rest.
     */
    reanimate = () => {
      requestAnimationFrame(() => {this.setState({resting: false})});
    };

    /**
     * Pause an action for the specified delay time.
     */
    pause = (action) => setTimeout(fn, delay);

    /**
     * Render the animation with state and onRest handler.
     */
    render() {
      return <Animation resting={resting} onRest={this.rest} {...this.props} />
    };
  };
};
