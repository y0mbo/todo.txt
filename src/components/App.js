import React from "react";
import Tasks from "./Tasks";

class App extends React.Component {
  state = {
    tasks: {},
    priorities: {},
    projects: {},
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello, World!</h1>
        <p>This is John's todo.txt implementation</p>
        <Tasks tasks={this.state.tasks}></Tasks>
      </React.Fragment>
    );
  }
}

export default App;
