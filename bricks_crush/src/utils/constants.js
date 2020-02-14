import { hypotenuseCalc } from "./formulas";

export const gameHeight = 800;
export const gameWidth = 700;
export const ballRadius = 9;
export const linePointerLength =
  hypotenuseCalc(gameWidth / 2, gameHeight / 2) * 1.25;
