import React from "react";
import css from "styled-components";

const TagStyle = css.div`

 background-color: #DCE3F7;
 border: 1px solid #355EAE;
 color: #355EAE;
 display: inline-block;
 font-family: arial;
 font-size: 12px;
 height: 20px;
 border-radius: 8px;
 margin-bottom: 20px;
 padding-left: 8px;

`;

const TagCount = css.span`
color: #DCE3F7;
background-color: #355EAE;
height: 100%;
border-radius: 6px;
margin-left: 8px;
width: 20px;
display: inline-block;
text-align: center;
`;

class Contexts extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.contexts).map((key) => (
            <li key={key}>
              <TagStyle>
                {key} <TagCount>{this.props.contexts[key]}</TagCount>
              </TagStyle>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contexts;
