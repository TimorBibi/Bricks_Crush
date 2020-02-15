import { getRealAngle, degreesToRadian, radiansToDegrees } from "./formulas";
import { gameWidth, gameHeight } from "./constants";

export const baseToWallByAngle = (basePosition, angle, elmRadius) => {
  let res;
  const realAngle = getRealAngle(angle);

  const basePosX = basePosition.x;
  const basePosY = basePosition.y;
  const realPosX = basePosX + Math.cos(degreesToRadian(realAngle)) * elmRadius;
  const realPosY = basePosY + Math.sin(degreesToRadian(realAngle)) * elmRadius;
  const xLength = gameWidth / 2 - Math.abs(realPosX);
  const yLength = gameHeight - Math.abs(realPosY);

  const rCornerAngle = radiansToDegrees(Math.atan(yLength / xLength));
  const lCornerAngle =
    180 - radiansToDegrees(Math.atan(yLength / (gameWidth - xLength)));

  if (realAngle > rCornerAngle && realAngle < lCornerAngle)
    res = Math.abs(yLength / Math.sin(degreesToRadian(realAngle)));
  else
    res = Math.abs(xLength / Math.cos(degreesToRadian(realAngle)));

  return res;
};
