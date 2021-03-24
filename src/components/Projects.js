import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.projects).map((key) => (
            <li key={key}>
              {key} {this.props.projects[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
