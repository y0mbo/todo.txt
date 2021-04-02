import React from "react";
import css from "styled-components";

const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

class Contexts extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.contexts).length > 0) {
      header = <h2>Contexts</h2>;
    }

    return (
      <div>
        {header}
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
