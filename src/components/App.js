import React from "react";
import Tasks from "./Tasks";
import Projects from "./Projects";
import sampleTasks from "../sampleTasks";

class App extends React.Component {
  state = {
    contexts: {},
    priorities: {},
    projects: {},
    tasks: {},
  };

  loadSampleTasks = () => {
    this.setState({ tasks: sampleTasks });
  };

  loadProjects = () => {
    const tasks = { ...this.state.tasks };
    const projects = { ...this.state.projects };

    // get all the unique projects from the task list
    let taskProjects = Object.values(tasks)
      .map((task) => task.projects)
      .filter((x) => x !== undefined)
      .sort();

    // count the number of tasks with each project name
    let projectCounts = {};
    for (var i = 0; i < taskProjects.length; i++) {
      projectCounts[taskProjects[i]] =
        1 + (projectCounts[taskProjects[i]] || 0);
    }

    // add the project and count to the projects
    Object.keys(projectCounts).forEach((key) => {
      projects[key] = projectCounts[key];
    });

    this.setState({ projects });
  };

  render() {
    return (
      <div className="app">
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
