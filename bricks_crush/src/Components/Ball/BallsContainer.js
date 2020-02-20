import React from "react";
import { connect } from "react-redux";
import Ball from "./Ball";
import { ballType } from "../../utils/constants";

class BallsContainer extends React.Component {

  createBall = ({ position, angle, id }, type) => (
    <Ball position={position} angle={angle} key={`Ball_${type}_${id}`} />
  );

  render() {
    const textStyle = {
      fill: "white",
      fontSize: "12px"
    }

    const inBase = this.props.ballsInBase;
    const inMove = this.props.ballsInMove;
    const {x, y} = this.props.basePosition;
    const firstBaseBall = inBase.size > 0 ? this.createBall(inBase.get(0), ballType.inBase) : null;
    const ballsCount = inBase.size;
    const countText = ballsCount ? <text x={x+10} y={y-10} style={{...textStyle}} >x {ballsCount}</text> : null;

    return (
      <g>
        {firstBaseBall}
        {countText}
        {inMove.size > 0 &&
          inMove.map((ball, indx) => {
            return this.createBall(ball, ballType.inMove);
          })}
      </g>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

BallsContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(BallsContainer);
