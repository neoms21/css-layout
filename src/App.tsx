import React from "react";
import styled from "styled-components";
import { Box } from "./components/atoms/Box";
import { SideBar } from "./components/organisms/SideBar";
import { MainContent } from "./components/organisms/MainContent";
import Stats from "./components/organisms/Stats";

const StyledHome = styled(Box)`
  display: grid;
  grid-template-columns: 2fr 10fr 3fr;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

function App() {
  return (
    <StyledHome>
      <SideBar />
      <MainContent />
      <Stats />
    </StyledHome>
  );
}

export default App;
