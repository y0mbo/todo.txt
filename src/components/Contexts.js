import React from "react";
import css from "styled-components";
import { Tags, Tag, TagAnchor, TagCount } from "../css/style.js";

class Contexts extends React.Component {
  render() {
    var header;
    if (Object.keys(this.props.contexts).length > 0) {
      header = <h2>Contexts</h2>;
    }

    return (
      <div class="contexts">
        {header}
        <Tags>
          {Object.keys(this.props.contexts).map((key) => (
            <Tag key={key}>
              <TagAnchor>
                {key} <TagCount>{this.props.contexts[key]}</TagCount>
              </TagAnchor>
            </Tag>
          ))}
        </Tags>
      </div>
    );
  }
}

export default Contexts;
