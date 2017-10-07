import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  gap: PropTypes.number
};

const defaultProps = {
  gap: 2
};

class Sequential extends Component {
  state = {
    epoch: null
  };

  componentDidMount() {
    this.startLoop();
  };

  componentWillUnmount() {
    this.stopLoop();
  };

  startLoop = () => {
    if (!this._frameID) {
      this._frameID = window.requestAnimationFrame(this.loop);
    }
  };

  stopLoop = () => {
    window.cancelAnimationFrame( this._frameId );
  };

  loop = (time) => {
    const { current, start, gap } = this.state;
    const interval = time - start;

    if ( interval >= gap ) {
      this.setState({
        start: time,
        current: (current + 1) % this.props.chilren.length;
      });
    }

    this._frameID = window.requestAnimationFrame(this.loop);
  }

  render() {
    const {children} = this.props;
    return (
      { children }
    );
  };
}
