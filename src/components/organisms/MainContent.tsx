import * as React from "react";
import { Box } from "../atoms/Box";
import Input from "../atoms/Input";
import Search from "../../assets/search.svg";
import { Flex } from "../atoms/Flex";
import { ReactComponent as Package } from "../../assets/package.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { Grid } from "../atoms/Grid";
import { Project } from "../molecules/Project";
import { projects } from "../../data/projects";

export type MainContentProps = {};

const SubHeading = ({ label, children }: any) => {
  return (
    <Grid alignItems="center" gridTemplateColumns="14fr 1fr">
      <h2>{label}</h2>
      <Flex justifyContent="end">{children}</Flex>
    </Grid>
  );
};

export const MainContent: React.FC<MainContentProps> = ({}) => {
  return (
    <Box px="2" bg="#dee3e2" mx="4" p="4">
      <Input bgImageUrl={Search} />
      <SubHeading label="Recently Used">
        <Package />
        <Menu />
      </SubHeading>

      <Grid gridTemplateColumns="repeat(4, minmax(150px, 1fr))" gridGap="2">
        {projects.map(({ name, createdDate, images }) => (
          <Project
            key={name}
            name={name}
            createdDate={createdDate}
            images={images}
          />
        ))}
      </Grid>

      <SubHeading label="Recent Files">
        <p>View all</p>
      </SubHeading>
    </Box>
  );
};
