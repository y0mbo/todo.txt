import React from "react";
import Contexts from "./Contexts";
import Projects from "./Projects";
import Tasks from "./Tasks";
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

  loadContexts = () => {
    const tasks = { ...this.state.tasks };
    const contexts = { ...this.state.contexts };

    // get all the unique contexts from the task list
    let taskContexts = Object.values(tasks)
      .map((task) => task.contexts)
      .filter((x) => x !== undefined)
      .sort();

    // count the number of tasks with each context name
    let contextCounts = {};
    for (var i = 0; i < taskContexts.length; i++) {
      contextCounts[taskContexts[i]] =
        1 + (contextCounts[taskContexts[i]] || 0);
    }

    // add the contexts and count to the contexts
    Object.keys(contextCounts).forEach((key) => {
      contexts[key] = contextCounts[key];
    });

    this.setState({ contexts });
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

  loadPriorities = () => {
    const tasks = { ...this.state.tasks };
    const priorities = { ...this.state.priorities };

    // get all the unique priorities from the task list
    let taskPriorities = Object.values(tasks)
      .map((task) => task.priorities)
      .filter((x) => x !== undefined)
      .sort();

    // count the number of tasks with each priority
    let priorityCounts = {};
    for (var i = 0; i < taskPriorities.length; i++) {
      priorityCounts[taskPriorities[i]] =
        1 + (priorityCounts[taskPriorities[i]] || 0);
    }

    // add the project and count to the priorities
    Object.keys(priorityCounts).forEach((key) => {
      priorities[key] = priorityCounts[key];
    });

    this.setState({ priorities });
  };

  loadSite = () => {
    this.loadProjects();
    this.loadContexts();
    this.loadPriorities();
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.loadSampleTasks}>Load sample tasks</button>
        <button onClick={this.loadSite}>Load site</button>
        <Projects projects={this.state.projects} />
        <Contexts contexts={this.state.contexts} />
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
