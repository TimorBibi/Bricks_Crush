import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { Map } from "immutable";
import "./Canvas.css";
import { canvasActions } from "./actions";
import { gameHeight, gameWidth } from "../../utils/constants";
import { getCanvasPosition } from "../../utils/formulas";
import BallsContainer from "../Ball/BallsContainer";
import LinePointer from "../miniComps/linePointer";
import BricksContainer from "../Brick/BricksContainer";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.props.initBaseBalls();
  }

  componentDidMount() {
    const self = this;
    self.props.initBaseBalls();
    self.moveInterval = setInterval(
      () => self.props.moveObjects(self.canvasMousePosition),
      10
    );
  }

  componentWillUnmount() {
    clearInterval(this.moveInterval);
  }

  trackMouse = event => {
    this.canvasMousePosition = getCanvasPosition(event);
  };

  render() {
    const viewBox = [gameWidth / -2, -gameHeight, gameWidth, gameHeight];
    return (
      <svg
        className="game_canvas"
        id="bricks_crush_canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
        style={{ width: gameWidth, height: gameHeight }}
        onMouseMove={this.trackMouse}
        onClick={() =>
          this.props.shootBall(this.props.ballsInBase, this.props.angle)
        }
      >
        <BallsContainer
          ballsInBase={this.props.ballsInBase}
          ballsInMove={this.props.ballsInMove}
          basePosition={this.props.basePosition}
        />
        {this.props.atBase && (
          <LinePointer
            basePosition={this.props.basePosition}
            angle={this.props.angle}
          />
        )}
        <BricksContainer />
      </svg>
    );
  }
}

const mapStateToProps = state => {
  return {
    angle: state.canvas.get("angle"),
    basePosition: state.canvas.get("basePosition"),
    atBase: state.canvas.get("atBase"),
    ballsInBase: state.canvas.get("ballsInBase"),
    ballsInMove: state.canvas.get("ballsInMove")
  };
};

const mapDispatchToProps = dispatch => ({
  moveObjects: mousePosition => {
    dispatch(canvasActions.moveObjects(mousePosition));
  },
  initBaseBalls: () => {
    dispatch(canvasActions.initInBaseBalls());
  },
  shootBall: (inBase, angle) => {
    dispatch(canvasActions.shootBall(inBase, angle));
  }
});

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  basePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
