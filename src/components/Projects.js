import React from "react";
import css from "styled-components";

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

const TagStyle = css.li`

  }
`;
const TagCount = css.span`
`;

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
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
