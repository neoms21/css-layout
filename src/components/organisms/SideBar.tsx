import React, { useState } from "react";

import { ReactComponent as Search } from "../assets/search.svg";
import { Flex } from "../atoms/Flex";
import { Container } from "../molecules/Container";
import { MenuItem } from "../molecules/MenuItem";
import styled from "styled-components";
import { sideBarItems } from "../../data/sidebar";

const StyledFlex = styled(Flex)`
  background-color: #204051;
`;

export const SideBar = () => {
  const [activeItem, setActiveItem] = useState(sideBarItems[0].label);
  return (
    <StyledFlex flexDirection="column" pt="5">
      <Container padding={4}>
        {sideBarItems.map(item => (
          <MenuItem
            active={activeItem === item.label}
            key={item.label}
            Icon={item.Icon}
            label={item.label}
            handleClick={(label: string) => setActiveItem(label)}
          />
        ))}
      </Container>
    </StyledFlex>
  );
};
