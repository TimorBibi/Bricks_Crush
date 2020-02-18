import { calculateAngle } from "../../utils/formulas";
import { ballRadius } from "../../utils/constants";

export default function moveObjects(state, action) {

  const { x, y } = action.mousePosition || { x: 0, y: 0 };
  const baseXPos = state.get('basePosition').x;
  const angle = calculateAngle(baseXPos, -ballRadius, x, y);
  
  return state.set("angle", angle);
}
