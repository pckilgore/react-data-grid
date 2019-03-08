import React from "react";
import styled from "styled-components";
import { wrapOrRender } from "./utils";

// This is a fundamental layout element that should not be changed.
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numCols - 1}, auto);
`;

const WholeRowWrapper = styled.div`
  grid-column: 1 / ${props => props.numCols};
`;

const Cell = styled.div`
  padding-right: ${props => props.colGap || "inherit"};
`;

export const DataGrid = props => {
  const { columns, data, colGap } = props;
  const numCols = columns.length;

  return (
    <Grid {...{ numCols }}>
      {columns.map(({ Header }) => wrapOrRender(Cell, Header, { colGap }))}
      {data.map(({ customRow, ...row }, index) => {
        // Custom Rendering Path
        if (customRow)
          return (
            <CustomRowRenderer {...{ row, columns, numCols, customRow }} />
          );

        // Standard Rendering Path
        return <NormalRowRenderer {...{ row, columns, colGap }} />;
      })}
    </Grid>
  );
};

const NormalRowRenderer = ({ row, columns, colGap }) =>
  columns.map(({ accessor, Cell: CustomCell }) => (
    <Cell {...{ colGap }}>
      {CustomCell ? <CustomCell>{row[accessor]}</CustomCell> : row[accessor]}
    </Cell>
  ));

const CustomRowRenderer = props => {
  const { customRow, numCols, colGap } = props;

  // Renders data for the row in the same Cell component.
  if (customRow.CellComponent)
    return customRow.data.map(data => (
      <customRow.CellComponent {...{ colGap }}>{data}</customRow.CellComponent>
    ));

  // Renders the whole row custom.
  if (customRow.RowComponent)
    return (
      <WholeRowWrapper {...{ numCols }}>
        <customRow.RowComponent />
      </WholeRowWrapper>
    );

  console.error("Moonbeam");
  return null;
};
