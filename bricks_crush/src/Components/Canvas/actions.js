export const canvasConstants = {
  SHOOT_BALL: "SHOOT_BALL",
  INIT_IN_BASE_BALLS: "INIT_IN_BASE_BALLS",
  MOVE_OBJECTS: "MOVE_OBJECTS"
};

const initInBaseBalls = () => ({
  type: canvasConstants.INIT_IN_BASE_BALLS
});

const shootBall = (inBase, angle) => ({
  type: canvasConstants.SHOOT_BALL,
  inBase,
  angle
});

const moveObjects = mousePosition => ({
    type: canvasConstants.MOVE_OBJECTS,
    mousePosition
  });

export const canvasActions = {
  shootBall: shootBall,
  moveObjects: moveObjects,
  initInBaseBalls: initInBaseBalls
};
