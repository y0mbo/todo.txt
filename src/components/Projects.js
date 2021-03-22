import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {/* loop through state.tasks' keys and map that. */}
          {Object.keys(this.props.projects).map((key) => (
            <li>{this.props.projects[key]}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
