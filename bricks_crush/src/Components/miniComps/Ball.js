import React from "react";
import PropTyeps from "prop-types";
import { ballRadius } from "../../utils/constants";

const Ball = props => {
  const { x, y } = props.position;
  return (
    <circle
      cx={x}
      cy={y - ballRadius}
      r={ballRadius}
      fill="red"
      stroke="white"
      strokeWidth={1}
    />
  );
};

Ball.propTyeps = {
  position: PropTyeps.shape({
    x: PropTyeps.number.isRequired,
    y: PropTyeps.number.isRequired
  }).isRequired
};

export default Ball;
