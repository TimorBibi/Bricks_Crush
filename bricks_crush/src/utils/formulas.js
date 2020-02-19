export const pathFromBezierCurve = cubicBezierCurve => {
  const {
    initialAxis,
    initialControlPoint,
    endingControlPoint,
    endingAxis
  } = cubicBezierCurve;
  return `
        M${initialAxis.x} ${initialAxis.y}
        c ${initialControlPoint.x} ${initialControlPoint.y}
        ${endingControlPoint.x} ${endingControlPoint.y}
        ${endingAxis.x} ${endingAxis.y}
      `;
};

export const radiansToDegrees = radians => (radians * 180) / Math.PI;

export const calculateAngle = (x1, y1, x2, y2) => {
  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  const angle = getRealAngle(radiansToDegrees(Math.atan(quotient)) * -1);
  return normalize(angle);
};

export const getCanvasPosition = event => {
  // mouse position on auto-scaling canvas
  // https://stackoverflow.com/a/10298843/1232793

  const svg = document.getElementById("bricks_crush_canvas");
  const point = svg.createSVGPoint();

  point.x = event.clientX;
  point.y = event.clientY;
  const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
  return { x, y };
};
export const mod = (x, m) => {
  return ((x % m) + m) % m;
};
export const degreesToRadian = degrees => (degrees * Math.PI) / 180;
export const getRealAngle = angle => angle * -1 + 90;
export const normalize = angle => mod(angle, 360);

export const calculateNextPosition = (x, y, angle, gapSpace) => {
  const realAngle = normalize(angle);
  const stepsX = gapSpace * Math.cos(degreesToRadian(realAngle));
  const stepsY = gapSpace * Math.sin(degreesToRadian(realAngle));
  return {
    x: x + stepsX,
    y: y - stepsY
  };
};

export const hypotenuseCalc = (sideA, sideB) => {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
};

export const getXOnCyclePos = (xPos, angle, elmRadius) => {
  return xPos + Math.cos(degreesToRadian(angle)) * elmRadius;
};

export const getYOnCyclePos = (yPos, angle, elmRadius) => {
  return yPos - Math.sin(degreesToRadian(angle)) * elmRadius;
};

export const mirrorAngleToY = angle => 180 - angle;
export const mirrorAngleToX = angle => 0 - angle;

export const calcDistance = (point1, point2) => {

  const a = point2.x - point1.x;
  const b = point2.y - point1.y;
  // const b = Math.abs(point2.y) - Math.abs(point1.y);
  // const quotient = dividend / divisor;
  return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}