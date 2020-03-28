import * as React from "react";
import { Flex } from "../atoms/Flex";
import { Box } from "../atoms/Box";
import styled from "styled-components";
import { Grid } from "../atoms/Grid";

const StyledBox = styled(Box)<{ active: boolean }>`
  svg {
    color: ${props => (props.active ? "white" : "silver")};
  }

  cursor: pointer;
  color: ${props => (props.active ? "white" : "silver")};
`;

export const MenuItem = ({ Icon, label, active,  handleClick }: any) => {
  return (
    <StyledBox active={active}>
      <Grid
        onClick={() => handleClick(label)}
        as="a"
        padding="3"
        alignItems="center"
        px="4"
        gridTemplateColumns="1fr 2fr"
      >
        <Icon />
        <span>{label} </span>
      </Grid>
    </StyledBox>
  );
};
