import { BCConstants } from "./actions";
import initialState from "../initialState";
import { initBasePosition } from "../../utils/constants";
import { Map,List } from "immutable";

function BCReducer(state = initialState, action) {
  switch (action.type) {
    // case BCConstants.SHOOT_BALL:
    //   const newBallsInMove = state.app.get("ballsInMove").push(action.ball);
    //   const newBallsInBase = state.app.get("ballsInBase").filter((ball) => action.ball.id !== ball.id);
    //   return state.app.set("ballsInMove", newBallsInMove).set("ballsInBase", newBallsInBase);
    default:
      return state;
  }
}

export default BCReducer;
