import css from "styled-components";

const sizeS = "10px";
const color1 = "rgb(255, 126, 0)";

export const Tags = css.ul`
  margin: 1em 0 0;
	padding: 0;
	list-style: none;

  &:after {
    clear:both;
    content: "";
    display: table;
  }
`;

export const Tag = css.li`
  float:left;
	height:24px;
	line-height:24px;
	
`;

export const TagAnchor = css.a`
  background:#0089e0;
  border-bottom-right-radius:4px;
  border-top-right-radius:4px;	
  color:#fff;
  float:left;
	height:24px;
	line-height:24px;
  margin-left:20px;
  padding:0 10px 0 12px;
	position:relative;
	text-decoration:none;

  &:before {
    content:"";
    float:left;
    position:absolute;
    top:0;
    left:-12px;
    width:0;
    height:0;
    border-color:transparent #0089e0 transparent transparent;
    border-style:solid;
    border-width:12px 12px 12px 0;	
  }

  &:after {
    content:"";
    position:absolute;
    top:10px;
    left:0;
    float:left;
    width:4px;
    height:4px;
    border-radius:2px;
    background:#fff;
    box-shadow:-1px -1px 2px #004977;
  }

  &:hover {
    background:#555;
  }
  &:hover:before{border-color:transparent #555 transparent transparent;}
  `;

export const TagCount = css.span`
  font-size: ${sizeS};
  color: $color1;
`;
