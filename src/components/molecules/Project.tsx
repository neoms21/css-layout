import * as React from "react";
import { Flex } from "../atoms/Flex";
import { Text } from "../atoms/Text";
import { Image } from "../atoms/Image";
import { ReactComponent as MoreVertical } from "../../assets/more-vertical.svg";
import DoubleFolder from "../../assets/icon-double-folder.png";
import One from "../../assets/1.jpg";
import Two from "../../assets/2.jpg";
import Three from "../../assets/3.jpg";
import Four from "../../assets/4.jpg";
import Five from "../../assets/5.jpg";

import { RightAligned, LeftAligned } from "../styles";
import styled from "styled-components";
import { Box } from "../atoms/Box";

const imagesMap: any = {
  1: One,
  2: Two,
  3: Three,
  4: Four,
  5: Five
};

const StyledProjectContainer = styled(Flex)`
  background-color: white;
  flex-direction: column;
  border-radius: 12px;
`;

const StyledImages = styled(Box)`
  img {
    margin-left: -10px;
  }
`;

export const Project: React.FC<{
  name: string;
  createdDate: string;
  images: Array<number>;
}> = ({ name, createdDate, images }: any) => {
  return (
    <StyledProjectContainer p="3">
      <RightAligned>
        <MoreVertical />
      </RightAligned>
      <Flex alignItems="center">
        <LeftAligned flex="2">
          <img src={DoubleFolder} alt="df" />
        </LeftAligned>

        <StyledImages flex="3">
          {images.map((image: any) => (
            <Image key={image} src={imagesMap[image]} circular />
          ))}
        </StyledImages>
      </Flex>
      <Text fontWeight="bold" fontSize="2" lineHeight="1">
        {name}
      </Text>
      <Text fontWeight="lighter" fontSize="0" lineHeight="0">
        Created: {createdDate}
      </Text>
    </StyledProjectContainer>
  );
};
