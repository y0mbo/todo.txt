import css from "styled-components";

const sizeS = "10px";
const color1 = "rgb(255, 126, 0)";

export const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;
`;

export const Tag = css.li`
  
`;

export const TagCount = css.span`
  font-size: ${sizeS};
  color: $color1;
`;
