import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Canvas.css";
import { gameHeight, gameWidth } from "../../utils/constants";
import Ball from "../miniComps/Ball";
import LinePointer from "../miniComps/linePointer";

const Canvas = props => {
  const viewBox = [gameWidth / -2, -gameHeight, gameWidth, gameHeight];

  return (
    <svg
      className="canvas"
      id="bricks_crush_canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
      style={{ width: gameWidth, height: gameHeight }}
      onMouseMove={props.trackMouse}
    >
      <Ball position={{ x: 0, y: 0 }} />
      <LinePointer basePosition={{ x: 0, y: 0 }} angle={props.angle} />
    </svg>
  );
};

const mapStateToProps = state => ({
  angle: state.appReducer.angle
});

const mapDispatchToProps = dispatch => ({});

Canvas.propTypes = {
  trackMouse: PropTypes.func.isRequired,
  angle: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
