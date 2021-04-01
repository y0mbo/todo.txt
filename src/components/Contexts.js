import React from "react";
import css from "styled-components";

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

class Contexts extends React.Component {
  render() {
    return (
      <div>
        <h2>Contexts</h2>
        <Tags>
          {Object.keys(this.props.contexts).map((key) => (
            <li key={key}>
              {key} <span>{this.props.contexts[key]}</span>
            </li>
          ))}
        </Tags>
      </div>
    );
  }
}

export default Contexts;
