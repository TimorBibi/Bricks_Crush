import { calculateAngle } from "../../utils/formulas";
import { ballRadius } from "../../utils/constants";

export default function moveObjects(state, action) {
  const { x, y } = action.mousePosition || { x: 0, y: 0 };
  const angle = calculateAngle(
    state.gameState.baseXPosition,
    -ballRadius,
    x,
    y
  );
  return {
    ...state,
    angle
  };
}
