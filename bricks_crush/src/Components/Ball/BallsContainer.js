import React from "react";
import { connect } from "react-redux";
import Ball from "./Ball";
import { ballType } from "../../utils/constants";

class BallsContainer extends React.Component {

  createBall = ({ position, angle, id }, type) => (
    <Ball position={position} angle={angle} key={`Ball_${type}_${id}`} />
  );

  render() {
    const inBase = this.props.ballsInBase;
    const inMove = this.props.ballsInMove;
    const firstBaseBall = inBase.size > 0 ? this.createBall(inBase.get(0), ballType.inBase) : null;

    return (
      <g>
        {firstBaseBall}
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
