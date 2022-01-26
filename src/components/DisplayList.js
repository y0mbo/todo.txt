import React from "react";

class DisplayList extends React.Component {
  render() {

    let className = this.props.className;
    let listArray = this.props.list.split(" "); 

    return (
   
      <ul className={className}>
          {Object.keys(listArray).map((key) => (
            <li className={`${listArray[key].replace(/@|\+/g, '')}`} key={key}>
              {listArray[key]}
          </li>
          ))}
      </ul>
    );
  }
}

export default DisplayList;



