import React from "react";
import Tasks from "./Tasks";
import Task from "./Task";
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

  loadProjects = () => {
    const projects = { project1: {} };
    this.setState({ projects });
  };

  render() {
    return (
      <div className="app">
        <h1>Hello, World!</h1>

        <Tasks
          loadSampleTasks={this.loadSampleTasks}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
