import React from "react";
import css from "styled-components";

class Task extends React.Component {
  render() {
    const { priority, createDate, description, raw } = this.props.details;

    return (
      <div className='task'>
        {priority && <span className={'priority priority' + priority}>({priority}) </span>}
        {/* {createDate && <CreateDate>{createDate}</CreateDate>} */}
        {description}
      </div>
    );
  }
}

export default Task;
