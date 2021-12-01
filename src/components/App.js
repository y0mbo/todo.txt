import React, { isValidElement, useState } from "react";

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
    body: "",
    calendarEvents: {},
    contexts: {},
    currentDate: new Date(),
    currentEvent: {},
    priorities: {},
    projects: {},
    selectedEvent: {},
    tasks: {},
    openModal: false,
    setModal: false,
  };

  componentDidMount() {
    this.loadSite();
  };

  changeDate = (date) => {
    this.setState({ currentDate: date });
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
    this.setState({selectedEvent: this.state.calendarEvents[Object.keys(this.state.calendarEvents)[0]]});
    this.setState({currentDate: new Date(2021,9,4)});  
  };

  showModal = (currentEvent) => {
    console.log(currentEvent);
    this.setState({selectedEvent: currentEvent});
    this.setState({openModal: true});
 };

  toggle = (e) => {
    e.preventDefault();
    this.setState({openModal: !this.state.openModal});
  };

  render() {
    return (
      <div className="app">
        <main className="container">
          <div className="tasklist">
            <Tasks tasks={this.state.tasks} />
            <Projects projects={this.state.projects} />
            <Contexts contexts={this.state.contexts} />
            <Priorities priorities={this.state.priorities} />
          </div>
          <div className="calendar">
            <CalendarEvents currentDate={this.state.currentDate} calendarEvents={this.state.calendarEvents} showModal={this.showModal} changeDate={this.changeDate} />
          </div>
        </main>
        <Modal selectedEvent={this.state.selectedEvent} show={this.state.openModal} title={"Modal"} close={this.toggle} />
      </div>
    );
  }
}

export default App;
