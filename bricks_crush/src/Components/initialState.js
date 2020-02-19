import { initBasePosition } from "../utils/constants";
import { Map, List } from "immutable";

const initialState = {
  app: Map({}),
  canvas: Map({
    atBase: true,
    basePosition: initBasePosition,
    angle: 90,
    ballsCount: 10,
    ballsInMove: List(),
    ballsInBase: List(),
    shooting: Map({
      toShoot: 10,
      shootAngle: 0,
      lastToLeaveId: -1,
    }),
    ballsSpeed: 1,
  })
};

export default initialState;
