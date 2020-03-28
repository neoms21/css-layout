import styled from 'styled-components';
import {
  AlignItemsProps,
  DisplayProps,
  FlexDirectionProps,
  FlexWrapProps,
  JustifyContentProps,
  OrderProps,
  LayoutProps,
  SpaceProps,
  alignItems,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  layout,
  order,
  space,
  color,
  ColorProps
} from 'styled-system';

export type FlexProps = AlignItemsProps &
  DisplayProps &
  FlexDirectionProps &
  FlexWrapProps &
  JustifyContentProps &
  LayoutProps &
  OrderProps &
  ColorProps &
  SpaceProps;

export const Flex = styled.div<FlexProps>`
  ${alignItems}
  ${display}
  ${flexWrap}
  ${flexDirection}
  ${justifyContent}
  ${layout}
  ${order}
  ${space}
  ${color}
`;

Flex.defaultProps = {
  display: 'flex',
};

Flex.displayName = 'Flex';
