import React from "react";
import styled from "styled-components";

const TaskStyle = styled.div`
  color: #333;
  font-size: 1em;
  font-family: arial;
  margin-bottom: 10px;
`;
const Priority = styled.span`
  color: #0033ff;
  padding-right: 10px;
`;
const CreateDate = styled.span`
  color: #009900;
  padding-right: 10px;
`;
const Raw = styled.div`
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
