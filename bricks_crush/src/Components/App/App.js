import React from "react";
import "./App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { appActions } from "./actions";
import Canvas from "../Canvas/Canvas";
import { getCanvasPosition } from "../../utils/formulas";

class App extends React.Component {
  componentDidMount() {
    const self = this;
    setInterval(() => self.props.moveObjects(self.canvasMousePosition), 10);
  }

  trackMouse = event => {
    this.canvasMousePosition = getCanvasPosition(event);
  };

  render() {
    return (
      <div className="App">
        <Canvas
          trackMouse={event => this.trackMouse(event)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  moveObjects: mousePosition => {
    dispatch(appActions.moveObjects(mousePosition));
  }
});

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
