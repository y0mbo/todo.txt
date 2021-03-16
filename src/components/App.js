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
    console.log("loadSampleTasks called");
    this.setState({ tasks: sampleTasks });
  };
  loadProjects = () => {
    const projects = { project1: {} };
    this.setState({ projects });
  };

  render() {
    this.loadProjects;
    return (
      <div className="app">
        <h1>Hello, World!</h1>
        <ul>
          {/* loop through state.tasks' keys and map that. */}
          {Object.keys(this.state.tasks).map((key) => (
            <Task key={key} id={key} details={this.state.fishes[key]} />
          ))}
        </ul>
        <Tasks
          loadSampleTasks={this.loadSampleTasks}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
