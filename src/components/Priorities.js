import React from "react";

class Priorities extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.priorities).length > 0) {
      header = <h2>Priorities</h2>;
    }
    return (
      <div>
        {header}
        <div className="tags">
          {Object.keys(this.props.priorities).map((key) => (
             <div className="tag" key={key}>
             <a>
               ({key}) <span className="tagCount">{this.props.priorities[key]}</span>
             </a>
           </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Priorities;
