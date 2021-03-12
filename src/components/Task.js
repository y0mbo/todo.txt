import React from "react";

class Task extends React.Component {
  render() {
    const { priority, createDate, description, raw } = this.props.details;

    return <li className="task">{raw}</li>;
  }
}

export default Task;
