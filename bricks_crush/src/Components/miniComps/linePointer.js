import React from "react";
import PropTypes from "prop-types";
import * as C from "../../utils/constants";
import * as Forms from "../../utils/formulas";
import *as Funcs from "../../utils/functions";

const LinePointer = props => {
  const baseX = props.basePosition.x;
  const baseY = props.basePosition.y;
  const circleRadius = C.ballRadius * 0.5;

  const baseToWallLength = Funcs.baseToWallByAngle(
    props.basePosition,
    props.angle,
    circleRadius
  );
  // const baseToWallLength = C.gameWidth * 1;
  const gapSpace = baseToWallLength / (circleRadius * 4);

  const numberOfCircles = Math.floor((baseToWallLength * 1.6) / gapSpace);

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
    if (
      endPosition.x - circleRadius <= C.gameWidth / -2 ||
      endPosition.x + circleRadius >= C.gameWidth / 2
    )
      return Forms.mirrorAngleToY(angle);
    return angle;
  };

  let circlePos = { x: baseX, y: baseY };
  let currAngle = props.angle;
  for (let i = 0; i < numberOfCircles; i++) {
    circlePos = Forms.calculateNextPosition(
      circlePos.x,
      circlePos.y,
      currAngle,
      gapSpace
    );
    circles.push(createCircle(circlePos, i));
    // currAngle = Funcs.calculateNewAngleByWall(circlePos, currAngle, circleRadius);
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
