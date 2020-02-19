import * as Forms from "./formulas";
import { gameWidth, gameHeight } from "./constants";

export const calcXLenToWallByAngle = (xPos, angle) => {
  if (angle >= 90) { //To left wall
    if (xPos >= 0) return (gameWidth / 2) + xPos;
    else return (gameWidth / 2) - Math.abs(xPos);
  }
  else { //To right wall
    if (xPos >= 0) return (gameWidth / 2) - Math.abs(xPos);
    else return (gameWidth / 2) + Math.abs(xPos);
  }
}

export const baseToWallByAngle = (basePosition, angle, elmRadius) => {
  // debugger;
  let res;
  const realAngle = Forms.normalize(angle);

  const realPosX = Forms.getXOnCyclePos(basePosition.x, angle, elmRadius);
  const realPosY = Forms.getYOnCyclePos(basePosition.y, angle, elmRadius);
  const xLength = calcXLenToWallByAngle(realPosX, angle);
  const yLength = gameHeight - Math.abs(realPosY);

  const rCornerAngle = Forms.radiansToDegrees(Math.atan(yLength / xLength));
  const lCornerAngle = Forms.mirrorAngleToY(
    Forms.radiansToDegrees(Math.atan(yLength / (gameWidth - xLength)))
  );

  if (realAngle > rCornerAngle && realAngle < lCornerAngle)
    res = Math.abs(yLength / Math.sin(Forms.degreesToRadian(realAngle)));
  else res = Math.abs(xLength / Math.cos(Forms.degreesToRadian(realAngle)));

  return res;
};

export const calculateNewAngleByWall = (ballPosition, angle, ballRadius) => {
  const xPos = Forms.getXOnCyclePos(ballPosition.x, angle, ballRadius);
  const yPos = Forms.getYOnCyclePos(ballPosition.y, angle, ballRadius);
  const realAngle = Forms.normalize(angle);
  //side walls
  if (Math.abs(xPos) >= gameWidth / 2) return Forms.mirrorAngleToY(angle);
  //top wall
  if (Math.abs(yPos) >= gameHeight) {
    return Forms.normalize(Forms.mirrorAngleToX(realAngle));
  }

  return angle;
};

export const isInBase = (ball, ballRadius) => {
  const yPos = Forms.getYOnCyclePos(ball.position.y, ball.angle, ballRadius);
  return yPos >= 0;
};
