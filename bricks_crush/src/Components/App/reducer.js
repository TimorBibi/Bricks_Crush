import { appConstants } from "./actions";
import moveObjects from "./moveObjects";

const initialGameState = {
  started: false,
  kills: 0,
  balls: [],
  currentPlayer: null,
  players: null,
  baseXPosition: 0
};

const appInitialState = {
  angle: 45,
  gameState: initialGameState,
}

function appReducer(state = appInitialState, action) {
  switch (action.type) {
    case appConstants.MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default appReducer;
