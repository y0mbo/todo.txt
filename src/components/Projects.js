import React from "react";
import css from "styled-components";

const TagStyle = css.div`
 background-color: #DCF7E3;
 border: 1px solid #35AE5E;
 color: #35AE5E;
 display: inline-block;
 font-family: arial;
 font-size: 12px;
 height: 20px;
 border-radius: 8px;
 margin-bottom: 20px;
 padding-left: 8px;
`;

const TagCount = css.span`
color: #DCF7E3;
background-color: #35AE5E;
display: inline;
height: 100%;
border-radius: 6px;
margin-left: 8px;
width: 20px;
display: inline-block;
text-align: center;
`;

class Projects extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.keys(this.props.projects).map((key) => (
            <li key={key}>
              <TagStyle>
                {key} <TagCount>{this.props.projects[key]}</TagCount>
              </TagStyle>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Projects;
