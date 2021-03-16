import React from "react";
import Task from "./Task";

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h2>My todo list</h2>
        <button onClick={this.props.loadSampleTasks}>Load sample tasks</button>
        <ul className="tasks">
          {/* loop through state.tasks' keys and map that. */}
          {Object.keys(this.props.tasks).map((key) => (
            <Task key={key} id={key} details={this.props.tasks[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Tasks;
