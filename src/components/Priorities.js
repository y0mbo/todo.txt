import React from "react";
import css from "styled-components";

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;
const TagCount = css.span`
`;

class Priorities extends React.Component {
  render() {
    return (
      <div>
        <Tags>
          {Object.keys(this.props.priorities).map((key) => (
            <li key={key}>
              {key} <TagCount>{this.props.priorities[key]}</TagCount>
            </li>
          ))}
        </Tags>
      </div>
    );
  }
}

export default Priorities;
