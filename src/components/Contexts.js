import React from "react";

class Contexts extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.contexts).length > 0) {
      header = <h2>Contexts</h2>;
    }

    return (
      <div className="contexts">
        {header}
        <div className="tags">
          {Object.keys(this.props.contexts).map((key) => (
            <div className="tag" key={key}>
              <a>
                <span className={`${key.replace(/@|\+/g, '')}`}>{key}</span> <span className="tagCount">{this.props.contexts[key]}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Contexts;
