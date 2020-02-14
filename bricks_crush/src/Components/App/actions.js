export const appConstants = {
    MOVE_OBJECTS: "MOVE_OBJECTS"
}

const moveObjects = (mousePosition) => ({
    type: appConstants.MOVE_OBJECTS,
    mousePosition
})

export const appActions = {
    moveObjects: moveObjects
}