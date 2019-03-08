import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`;

const DataGrid = ({ columns, data }) => (
  <Grid cols={columns.length}>
    {columns.map(({ Header }) => {
      if (typeof Header === "string") return <div>{Header}</div>;
    })}
  </Grid>
);

function App() {
  return (
    <div className="App">
      <DataGrid
        columns={[
          {
            Header: "Column One",
            accessor: "name"
          },
          {
            Header: "Column Two",
            accessor: "percent"
          },
          {
            Header: "Column Three",
            accessor: "value"
          }
        ]}
        data={[
          {
            name: "A really long row of content",
            percent: "5%",
            value: 1000
          }
        ]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
