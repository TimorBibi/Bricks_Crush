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
    ballsInBase: List()
  })
};

export default initialState;
