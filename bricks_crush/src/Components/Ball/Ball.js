import React from "react";
import propTypes from "prop-types";
import { ballRadius } from "../../utils/constants";

class Ball extends React.Component {
  render() {
    const { x, y } = this.props.position;
    return (
      <circle
        cx={x}
        cy={y}
        r={ballRadius}
        fill="red"
        stroke="white"
        strokeWidth={1}
      />
    );
  }
}

Ball.propTypes = {
  position: propTypes.shape({
    x: propTypes.number.isRequired,
    y: propTypes.number.isRequired
  }).isRequired,
  angle: propTypes.number.isRequired
};

export default Ball;
