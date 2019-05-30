import React, { Component } from "react";

class AnimationTest extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Cooking in progress..</h2>
          <div id="cooking">
            <div class="bubble" />
            <div class="bubble" />
            <div class="bubble" />
            <div class="bubble" />
            <div class="bubble" />
            <div id="area">
              <div id="sides">
                <div id="pan" />
                <div id="handle" />
              </div>
              <div id="pancake">
                <div id="pastry" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimationTest;
