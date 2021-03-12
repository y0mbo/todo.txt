import React from "react";
import Tasks from "./Tasks";
import sampleTasks from "../sampleTasks";

class App extends React.Component {
  state = {
    tasks: {},
    priorities: {},
    projects: {},
  };

  loadSampleTasks = () => {
    this.setState({ tasks: sampleTasks });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Hello, World!</h1>
        <p>This is John's todo.txt implementation</p>
        <Tasks loadSampleTasks={this.loadSampleTasks}></Tasks>
      </React.Fragment>
    );
  }
}

export default App;
