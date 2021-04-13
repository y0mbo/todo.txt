import React from "react";
import css from "styled-components";
import { Tags, Tag, TagAnchor, TagCount } from "../css/style.js";

class Projects extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.projects).length > 0) {
      header = <h2>Projects</h2>;
    }

    return (
      <div class="projects">
        {header}
        <Tags>
          {Object.keys(this.props.projects).map((key) => (
          <Tag key={key}>
          <TagAnchor>
            {key} <TagCount>{this.props.projects[key]}</TagCount>
          </TagAnchor>
        </Tag>

          ))}
        </Tags>
      </div>
    );
  }
}

export default Projects;
