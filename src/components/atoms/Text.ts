import styled from "styled-components";
import {
  AlignItemsProps,
  AlignSelfProps,
  BorderBottomProps,
  ColorProps,
  DisplayProps,
  FlexProps,
  FlexDirectionProps,
  JustifyContentProps,
  SpaceProps,
  color,
  space,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  fontSize,
  fontWeight,
  lineHeight
} from "styled-system";

export type TextProps = AlignItemsProps &
  AlignSelfProps &
  BorderBottomProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  FlexDirectionProps &
  JustifyContentProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  SpaceProps;

export const Text = styled.p<TextProps>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
`;

export const H1 = Text.withComponent("h1");
