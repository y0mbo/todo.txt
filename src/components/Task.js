import React from "react";
import styled from "styled-components";

const TaskStyle = styled.li`
  color: #333;
  font-size: 1em;
  font-family: arial;
`;

class Task extends React.Component {
  render() {
    const { priority, createDate, description, raw } = this.props.details;

    return (
      <TaskStyle>
        <span className="priority">({priority})</span>&nbsp;
        {description}
        <div className="raw">{raw}</div>
      </TaskStyle>
    );
  }
}

export default Task;
