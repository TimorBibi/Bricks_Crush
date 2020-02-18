import React from "react";
// import propTypes from "prop-types";
import { connect } from "react-redux";
import {List} from "immutable";
import Ball from "./Ball";
// import { ballRadius } from "../../utils/constants";

class BallsContainer extends React.Component {

  createBall = ({ position, angle, id }) => (
    <Ball position={position} angle={angle} key={`Ball_${id}`} />
  );

  render() {
    const inBase = this.props.ballsInBase;
    const inMove = this.props.ballsInMove;
    const firstBaseBall = inBase.size > 0 ? this.createBall(inBase.get(0)) : null;

    return (
      <g>
        {firstBaseBall}
        {inMove.size > 0 &&
          inMove.map((ball, indx) => {
            return this.createBall(ball);
          })}
      </g>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

BallsContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(BallsContainer);
