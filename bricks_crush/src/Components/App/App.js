import React from "react";
import "./App.css";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { Map } from "immutable";
// import { appActions } from "./actions";
import Canvas from "../Canvas/Canvas";
// import { getCanvasPosition } from "../../utils/formulas";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Canvas />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

App.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
