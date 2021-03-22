import React from "react";
import Tasks from "./Tasks";
import Projects from "./Projects";
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
    const tasks = { ...this.state.tasks };
    const projects = { ...this.state.projects };

    // get all the projects from the tasks
    const taskArray = Object.values(tasks);
    var filtered = [...new Set(taskArray.map((task) => task.projects))].filter(
      (x) => x !== undefined
    );

    console.log(filtered);

    //    projects = projects.concat(filtered);

    projects[`p${Date.now()}`] = "projectName";

    console.log(projects);

    // write the projects to state
    this.setState({ projects });
  };

  render() {
    return (
      <div className="app">
        <h1>Hello, World!</h1>
        <Projects projects={this.state.projects} />

        <Tasks
          loadSampleTasks={this.loadSampleTasks}
          tasks={this.state.tasks}
          loadProjects={this.loadProjects}
        />
      </div>
    );
  }
}

export default App;
