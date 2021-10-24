import React, { useState } from "react";

import Contexts from "./Contexts";
import Priorities from "./Priorities";
import Projects from "./Projects";
import CalendarEvents from "./CalendarEvents";
import Modal from "./Modal";
import Tasks from "./Tasks";

import sampleEvents from "../sampleEvents";
import sampleTasks from "../sampleTasks";

class App extends React.Component {
  state = {
    contexts: {},
    calendarEvents: {},
    priorities: {},
    projects: {},
    tasks: {},
  };

  loadSampleTasks = () => {
    this.setState({ tasks: sampleTasks });
  };

  loadSampleEvents = () => {
    this.setState({ calendarEvents: sampleEvents });
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
    this.loadSampleEvents();
    this.loadProjects();
    this.loadContexts();
    this.loadPriorities();
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.loadSite}>Load site</button>
        <button>Test Modal</button>
        {/*
        <Projects projects={this.state.projects} />
        <Contexts contexts={this.state.contexts} />
        
        <Priorities priorities={this.state.priorities} />
        */}
        <main className="container">
          <div className="tasklist">
            <Tasks tasks={this.state.tasks} />
          </div>
          <div className="calendar">
            <CalendarEvents calendarEvents={this.state.calendarEvents} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
