import React from "react";

class Contexts extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.contexts).map((key) => (
            <li key={key}>
              {key} {this.props.contexts[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contexts;
