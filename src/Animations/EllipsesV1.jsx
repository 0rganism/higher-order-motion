import React from 'react';
import {Motion, spring} from 'react-motion';

class Circle extends React.Component {
  state = {
    isResting: false,
  }

  constructor(props) {
    super(props);

    this.handleRest = this.handleRest.bind(this);
  }

  handleRest() {
    this.setState({
      isResting: true,
    },
    () => {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.setState({
            isResting: false,
          })
        })
      }, this.props.delay)
    });
  }

  render() {

    return (
      <g>
        <Motion
          defaultStyle={{ opacitySpring: 0, sizeSpring: 0.25 }}
          style={{
            opacitySpring: this.state.isResting ? 0 : spring(1, {stiffness: 130, damping: 26}),
            sizeSpring: this.state.isResting ? 0.25 : spring(1, {stiffness: 200, damping: 50})
          }}
          onRest={this.handleRest}
        >
          {({ opacitySpring, sizeSpring }) =>
              <circle
                className="pulse"
                cx={this.props.xPos}
                cy={this.props.yPos}
                r={this.props.radius + this.props.radius * sizeSpring}
                fill={"rgb(238, 191, 69)"}
                style={{opacity: 0.75 - opacitySpring * 0.75,}}
              />
          }
        </Motion>
      </g>
    );
  }
};

const EllipsesV1 = () => {
  return (
    <svg width={400} height={400}>
      <Circle
        delay={15}
        xPos={100}
        yPos={200}
        radius={25}
      />
      <Circle
        delay={20}
        xPos={200}
        yPos={200}
        radius={25}
      />
      <Circle
        delay={25}
        xPos={300}
        yPos={200}
        radius={25}
      />
    </svg>
  );
};

export default EllipsesV1;
