import React from "react";
import Brick from "./Brick";
import * as C from "../../utils/constants";

const BricksContainer = (props) => {
    const bricks = props.bricks;
    const {width, height} = C.singleBrickSize;
    return (
        <Brick centerPosition={{x: 0, y: -300}}/>
    );
}

export default BricksContainer;