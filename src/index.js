import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, auto);
`;

const wrapOrRender = (Wrapper, MaybeComponent) => {
  if (typeof MaybeComponent === "string")
    return <Wrapper>{MaybeComponent}</Wrapper>;
  return <MaybeComponent />;
};

const DataGrid = ({ columns, data }) => (
  <Grid cols={columns.length}>
    {columns.map(({ Header }) => wrapOrRender("Div", Header))}
    {data.map((row, index) =>
      columns.map(({ accessor }) => <div>{row[accessor]}</div>)
    )}
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
            Header: () => (
              <div>
                <em>Column Two</em>
              </div>
            ),
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
            value: "100000000000000000000000000"
          },
          {
            name:
              "A really, really, really, really, really long row of content",
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
