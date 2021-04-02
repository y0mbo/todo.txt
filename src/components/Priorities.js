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
    var header;
    if (Object.keys(this.props.priorities).length > 0) {
      header = <h2>Priorities</h2>;
    }
    return (
      <div>
        {header}
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
