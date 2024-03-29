import React from "react";
import Task from "./Task";
import css from "styled-components";

const TaskList = css.ul`
  list-style: none;
  margin: 0;
	padding: 0;
`;

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

class Tasks extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}
        <span className="taskCount">({Object.keys(this.props.tasks).length} tasks)</span>
        </h2>
        <TaskList>
          {/* loop through state.tasks' keys and map that. */}
          {Object.keys(this.props.tasks).map((key) => (
            <Task key={key} id={key} task={this.props.tasks[key]} updateTask={this.props.updateTask} />
          ))}
        </TaskList>
      </div>
    );
  }
}

export default Tasks;
