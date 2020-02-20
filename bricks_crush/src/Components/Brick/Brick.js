import React from "react";
import * as C from "../../utils/constants";

const Brick = (props) => {
    const {x, y} = props.centerPosition;
    const {width, height} = C.singleBrickSize;
    const style = {
        fill: "red",
        stroke: "black",
        strokeWidth: 1.5,
        fillOpacity: 0.7,
    }

    return (
        <rect x={x - width / 2} y={y - height / 2} height={height} width={width} rx="5" style={{...style}}/>
    );
}

export default Brick;