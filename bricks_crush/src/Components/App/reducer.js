import { appConstants } from "./actions";
import moveObjects from "./moveObjects";
import { ballRadius } from "../../utils/constants";

const initialGameState = {
  started: false,
  balls: [],
  basePosition: { x: 0, y: -ballRadius },
  angle: 90,
};

const appInitialState = {
  gameState: initialGameState
};

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case appConstants.MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default appReducer;
