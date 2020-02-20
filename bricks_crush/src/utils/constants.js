export const gameHeight = 800;
export const gameWidth = 700;
export const ballRadius = 7;
export const initBasePosition = { x: 0, y: -ballRadius };
export const ballMovementJumps = 8;
export const gapBetweenBalls = 22;
export const ballType = Object.freeze({
  inBase: "Base",
  inMove: "InMove"
});
export const speeds = [0.5, 1, 2, 3, 4, 5, 6];
export const bricksInRow = 12;
export const bricksInColumn = (gameHeight * bricksInRow) / gameWidth;
export const singleBrickSize = {
  width: gameWidth / bricksInRow,
  height: gameHeight / bricksInColumn
};
