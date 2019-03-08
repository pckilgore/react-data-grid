import React from "react";
import ReactDOM from "react-dom";
import { DataGrid } from "./";

const columns = [
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
    accessor: "value",
    Cell: props => <strong>{props.children}</strong>
  },
  ,
  {
    Header: "Column Four",
    accessor: "insult"
  }
];

const data = [
  {
    customRow: {
      RowComponent: () => (
        <div style={{ borderBottom: "1px solid red" }}>I'm A FUCKING ROW</div>
      )
    }
  },
  {
    name: "A really long row of content",
    percent: "5%",
    value: "100000000000000000000000000",
    insult: "clown"
  },
  {
    customRow: {
      CellComponent: props => (
        <div style={{ backgroundColor: "purple", color: "white" }}>
          {props.children}
        </div>
      ),
      data: ["Total", "5%", null, "Go away"]
    }
  },
  {
    name: "A really, really, really, really, really long row of content",
    percent: "5%",
    value: 1000,
    insult: "salty"
  }
];

function App() {
  return (
    <div className="App">
      <DataGrid {...{ columns, data, colGap: "8px" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
