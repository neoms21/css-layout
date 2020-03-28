import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input<{ bgImageUrl?: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-top: 12px; /*  */
  padding-left: 35px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: 7px 7px;
  background-image: url(${props => props.bgImageUrl});
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export type InputProps = { bgImageUrl?: string };

export const Input: React.FC<InputProps> = ({ bgImageUrl }) => {
  React.useEffect(() => {}, []);
  return <StyledInput bgImageUrl={bgImageUrl}></StyledInput>;
};

export default Input;
