import React from "react";
import PropTypes from "prop-types";
import {
  ballRadius,
  gameHeight,
  gameWidth,
  linePointerLength
} from "../../utils/constants";
import { calculateNextPosition } from "../../utils/formulas";

const LinePointer = props => {
  const baseX = props.basePosition.x;
  const baseY = props.basePosition.y - ballRadius;
  const circleRadius = ballRadius * 0.7;
  const numberOfCircles = linePointerLength / circleRadius * 2;
  const circles = [];

  const circleStyle = {
    // fill: "#5184AF",
    fill: "black",
    fillOpacity: 0.3,
    stroke: " #304f69",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeOpacity: 0.3
  };

  const createCircle = ({ x, y }, id) => {
    return (
      <circle
        cx={x}
        cy={y}
        r={circleRadius}
        {...circleStyle}
        key={`linePointer-${id}`}
      />
    );
  };

  const newAngleByBorders = (angle, endPosition) => {
    if (endPosition.x <= gameWidth / -2 || endPosition.x >= gameWidth / 2)
      return angle * -1;
    return angle;
  };

  let circlePos = { x: baseX, y: baseY };
  let currAngle = props.angle;
  for (let i = 0; i < numberOfCircles; i++) {
    circlePos = calculateNextPosition(
      circlePos.x,
      circlePos.y,
      currAngle,
      1.5
    );
    circles.push(createCircle(circlePos, i));
    currAngle = newAngleByBorders(currAngle, circlePos);
  }

  return <React.Fragment>{circles}</React.Fragment>;
};

LinePointer.propTypes = {
  basePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
  angle: PropTypes.number.isRequired
};

export default LinePointer;
