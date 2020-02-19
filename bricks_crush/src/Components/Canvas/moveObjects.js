import * as Forms from "../../utils/formulas";
import * as Funcs from "../../utils/functions";
import * as C from "../../utils/constants";
import { Map } from "immutable";

export default function moveObjects(state, action) {
  //calculate angle by mouse position
  const { x, y } = action.mousePosition || { x: 0, y: 0 };
  const baseXPos = state.get("basePosition").x;
  const baseYPos = state.get("basePosition").y;
  const angle = Forms.calculateAngle(baseXPos, baseYPos, x, y);

  //shoot new ball
  let newInMove = state.get("ballsInMove");
  let newInBase = state.get("ballsInBase");
  let atBase = state.get("atBase");
  let toShoot = state.get("shooting").get("toShoot");
  let shootAngle = state.get("shooting").get("shootAngle");
  let lastToLeaveId = state.get("shooting").get("lastToLeaveId");
  const ballsCount = state.get("ballsCount");
  const moveSpeed = C.speeds[1];

  if (toShoot && !atBase && newInBase.size) {
    const ball = newInBase.get(0);
    if (toShoot === ballsCount) {
      // First Ball
      shootAngle = angle;
    }
    const lastBallPos =
      lastToLeaveId !== -1 ? newInMove.find(b => lastToLeaveId === b.id).position : null;
    if (
      !lastBallPos ||
      (lastBallPos &&
        Forms.calcDistance(ball.position, lastBallPos) >= C.gapBetweenBalls)
    ) {
      ball.angle = shootAngle;
      newInBase = newInBase.filter(currBall => currBall.id !== ball.id);
      newInMove = newInMove.push(ball);
      lastToLeaveId = ball.id;
      toShoot--;
    }
  }

  //calculate inMove next position
  newInMove = newInMove.map(({ position, angle, id }) => {
    const newPos = Forms.calculateNextPosition(
      position.x,
      position.y,
      angle,
      C.ballMovementJumps * moveSpeed,
    );
    const newAngle = Funcs.calculateNewAngleByWall(newPos, angle, C.ballRadius);

    return { position: newPos, angle: newAngle, id };
  });

  //move back to inBase
  let newBasePosition = state.get("basePosition");

  for (let i = 0; i < newInMove.size; i++) {
    var ball = newInMove.get(i);
    if (Funcs.isInBase(ball, C.ballRadius)) {
      if (newInBase && newInBase.size === 0)
        newBasePosition = { x: ball.position.x, y: -C.ballRadius };

      newInMove = newInMove.delete(i);
      newInBase = newInBase.push({
        position: newBasePosition,
        angle: NaN,
        id: ball.id
      });
    }
  }

  //init the values
  if (newInMove && newInMove.size === 0) {
    atBase = true;
    toShoot = ballsCount;
    lastToLeaveId = -1;
  }

  const newShooting = Map({
    toShoot: toShoot,
    shootAngle: shootAngle,
    lastToLeaveId: lastToLeaveId
  });

  return state
    .set("angle", angle)
    .set("ballsInMove", newInMove)
    .set("ballsInBase", newInBase)
    .set("basePosition", newBasePosition)
    .set("shooting", newShooting)
    .set("atBase", atBase);
}
