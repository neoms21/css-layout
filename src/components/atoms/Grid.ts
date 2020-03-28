import styled from "styled-components";
import {
  alignItems,
  AlignItemsProps,
  display,
  DisplayProps,
  gridArea,
  GridAreaProps,
  gridAutoColumns,
  GridAutoColumnsProps,
  gridAutoFlow,
  GridAutoFlowProps,
  gridAutoRows,
  GridAutoRowsProps,
  gridColumn,
  gridColumnGap,
  GridColumnGapProps,
  GridColumnProps,
  gridGap,
  GridGapProps,
  gridRow,
  gridRowGap,
  GridRowGapProps,
  GridRowProps,
  gridTemplateAreas,
  GridTemplateAreasProps,
  gridTemplateColumns,
  GridTemplateColumnsProps,
  gridTemplateRows,
  GridTemplateRowsProps,
  justifyItems,
  JustifyItemsProps,
  space,
  SpaceProps
} from "styled-system";

export const Grid = styled.div<
  DisplayProps &
    JustifyItemsProps &
    AlignItemsProps &
    SpaceProps &
    GridGapProps &
    GridRowGapProps &
    GridColumnGapProps &
    GridAutoFlowProps &
    GridAutoRowsProps &
    GridAutoColumnsProps &
    GridTemplateRowsProps &
    GridTemplateColumnsProps &
    GridTemplateAreasProps
>`
  display: grid;
  ${space}
  ${alignItems}
  ${justifyItems}
  ${gridGap}
  ${gridRowGap}
  ${gridColumnGap}
  ${gridAutoFlow}
  ${gridAutoRows}
  ${gridAutoColumns}
  ${gridTemplateRows}
  ${gridTemplateColumns}
  ${gridTemplateAreas}

  
`;

Grid.displayName = "Grid";
