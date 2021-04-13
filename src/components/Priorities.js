import React from "react";
import css from "styled-components";
import { Tags, Tag, TagAnchor, TagCount } from "../css/style.js";

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
             <Tag key={key}>
             <TagAnchor>
               ({key}) <TagCount>{this.props.priorities[key]}</TagCount>
             </TagAnchor>
           </Tag>
          ))}
        </Tags>
      </div>
    );
  }
}

export default Priorities;
