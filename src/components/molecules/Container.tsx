import React from "react";
import { Box } from "../atoms/Box";

interface Props {
  children: React.ReactNode;
  padding?: number;
  bgColor?: string;
}

export const Container: React.FC<Props> = ({
  children,
  padding = 2,
  bgColor
}: Props) => {
  return <Box bg={bgColor}  pt={padding}>{children}</Box>;
};
