import React from "react";

class Task extends React.Component {
  render() {
    const { priority, createDate, description, raw } = this.props.details;

    return (
      <li className="task">
        <span className="priority">({priority})</span>&nbsp;
        {description}
        <div className="raw">{raw}</div>
      </li>
    );
  }
}

export default Task;
