import { combineReducers } from "redux";
import appReducer from "./Components/App/reducer";
import canvasReducer from "./Components/Canvas/reducer";

const reducers = combineReducers({
  app: appReducer,
  canvas: canvasReducer
});

export default reducers;
