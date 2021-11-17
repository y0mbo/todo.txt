import React from "react";

class Projects extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.projects).length > 0) {
      header = <h2>Projects</h2>;
    }

    return (
      <div className="projects">
        {header}
        <div className="tags">
          {Object.keys(this.props.projects).map((key) => (
          <div className="tag" key={key}>
          <a>
            {key} <span className="tagCount">{this.props.projects[key]}</span>
          </a>
        </div>

          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
