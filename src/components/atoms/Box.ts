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
  LayoutProps,
  OrderProps,
  PositionProps,
  SpaceProps,
  alignItems,
  alignSelf,
  borderBottom,
  color,
  display,
  flex,
  flexDirection,
  justifyContent,
  layout,
  order,
  position,
  space,
  GridProps
} from "styled-system";

export type BoxProps = AlignItemsProps &
  AlignSelfProps &
  BorderBottomProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  FlexDirectionProps &
  JustifyContentProps &
  LayoutProps &
  OrderProps &
  PositionProps &
  GridProps &
  SpaceProps;

export const Box = styled.div<BoxProps>`
  ${borderBottom}
  ${alignItems}
  ${alignSelf}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${justifyContent}
  ${layout}
  ${order}
  ${position}
  ${space}
`;

Box.displayName = "Box";
