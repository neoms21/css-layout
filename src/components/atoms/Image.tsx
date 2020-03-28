import * as React from "react";
import styled from "styled-components";

export type Props = {
  circular?: boolean;
  src: string;
};

const StyledImg = styled.img<{ circular?: boolean }>`
  ${({ circular }) =>
    circular &&
    `
    border-radius: 50%;
  `};
  width: 25px;
  height: 25px;
  border: solid 1px #fff;
`;
export const Image: React.FC<Props> = ({ src, circular }: Props) => {
  return <StyledImg src={src} alt={src} circular={circular} />;
};

export default Image;
