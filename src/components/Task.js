import React from "react";
import css from "styled-components";
import taskIcon from "../img/empty.svg";
import taskIconHover from "../img/hover.svg";
import taskIconDone from "../img/completed.svg";


class Task extends React.Component {

  handleChange = event => {
    let newStatus = "";
    if (this.props.task.status === "completed") {
      newStatus = "incomplete";
    } else {
      newStatus = "completed";
    }

    const updatedTask = {
      ...this.props.task,
      status: newStatus,
    };
    this.props.updateTask(this.props.id, updatedTask);
   };

  render() {
    const { priority, createDate, description, raw, status } = this.props.task;
    
    let cssStatus = "";
    if (status === "completed") {
      cssStatus = "completed";
    }

    return (
      <div className={`task ${cssStatus}`}>
        <div className="taskComplete" onClick={this.handleChange}>
          <img src={taskIcon} height="14" alt="edit" className="imageMain" />
          <img src={taskIconHover} height="14" alt="Mark completed" className="imageHover" />
          <img src={taskIconDone} height="14" alt="Mark completed" className="imageDone" />
        </div>
        <div className="taskContent ">
        {priority && <span className={'priority priority' + priority}>({priority}) </span>}
        {/* {createDate && <CreateDate>{createDate}</CreateDate>} */}
        {description} 
        </div>
      </div>
    );  
  }
}

export default Task;
