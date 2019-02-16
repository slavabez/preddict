import React, { Component } from "react";
import { view } from "react-easy-state";
import mainState from "./stores/main";

class Watching extends Component {
  render() {
    return (
      <div>
        <h1>You are watching {mainState.watchingPosts.length} posts</h1>
      </div>
    );
  }
}

export default view(Watching);
