import React from "react";

import Contexts from "./Contexts";
import Priorities from "./Priorities";
import Projects from "./Projects";
import Events from "./Events";
import Tasks from "./Tasks";
import sampleTasks from "../sampleTasks";

class App extends React.Component {
  state = {
    contexts: {},
    events: {},
    priorities: {},
    projects: {},
    tasks: {},
  };

  loadSampleTasks = () => {
    this.setState({ tasks: sampleTasks });
  };

  loadContexts = () => {
    const tasks = sampleTasks; //{ ...this.state.tasks };
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
    const tasks = sampleTasks; //{ ...this.state.tasks };
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
    const tasks = sampleTasks; //{ ...this.state.tasks };
    const priorities = { ...this.state.priorities };

    // get all the unique priorities from the task list
    let taskPriorities = Object.values(tasks)
      .map((task) => task.priority)
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
    this.loadSampleTasks();
    this.loadProjects();
    this.loadContexts();
    this.loadPriorities();
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.loadSite}>Load site</button>
        <Projects projects={this.state.projects} />
        <Contexts contexts={this.state.contexts} />
        <Priorities priorities={this.state.priorities} />
        <Tasks tasks={this.state.tasks} />
        <Events events={this.state.events} />
      </div>
    );
  }
}

export default App;
