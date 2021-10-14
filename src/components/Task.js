import React from "react";
import css from "styled-components";

const TaskStyle = css.div`
  font-size: 1em;
  margin-bottom: 10px;
`;
const Priority = css.span`
  padding-right: 10px;
`;
const CreateDate = css.span`
  padding-right: 10px;
`;
const Raw = css.div`
  font-size: 0.8rem;
  color: #999;
`;

class Task extends React.Component {
  render() {
    const { priority, createDate, description, raw } = this.props.details;

    return (
      <TaskStyle>
        {priority && <Priority>({priority})</Priority>}
        {createDate && <CreateDate>{createDate}</CreateDate>}
        {description}
        <Raw>{raw}</Raw>
      </TaskStyle>
    );
  }
}

export default Task;
