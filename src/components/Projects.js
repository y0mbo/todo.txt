import React from "react";
import css from "styled-components";
import { TagCount } from "../css/style.js";

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

const TagStyle = css.li`

  
`;

class Projects extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.projects).length > 0) {
      header = <h2>Projects</h2>;
    }

    return (
      <div>
        {header}
        <Tags>
          {Object.keys(this.props.projects).map((key) => (
            <li key={key}>
              {key} <TagCount>{this.props.projects[key]}</TagCount>
            </li>
          ))}
        </Tags>
      </div>
    );
  }
}

export default Projects;
