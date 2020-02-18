import { canvasConstants } from "./actions";
import initialState from "../initialState";
import { initBasePosition } from "../../utils/constants";
import {List } from "immutable";
import moveObjects from "./moveObjects";

const initInBaseBalls = state => {
  let inBase = [];
  for (let i = 0; i < state.get("ballsCount"); i++) {
    inBase.push({ position: initBasePosition, angle: NaN, id: i });
  }
  inBase = List(inBase);
  return state.set("ballsInBase", inBase);
};

const shootBallHandler = (state, action) => {
  const inBase = action.inBase;

  if (inBase && inBase.count()) {
    const ball = inBase.get(0);

    ball.angle = action.angle;

    const newBallsInMove = state.get("ballsInMove").push(ball);
    const newBallsInBase = inBase.filter(currBall => currBall.id !== ball.id);

    return state
      .set("ballsInMove", newBallsInMove)
      .set("ballsInBase", newBallsInBase);
  } else return state;
};

function canvasReducer(state = initialState.canvas, action) {
  switch (action.type) {
    case canvasConstants.MOVE_OBJECTS:
      return moveObjects(state, action);
    case canvasConstants.INIT_IN_BASE_BALLS:
      return initInBaseBalls(state);
    case canvasConstants.SHOOT_BALL:
      return shootBallHandler(state, action);
    default:
      return state;
  }
}

export default canvasReducer;
