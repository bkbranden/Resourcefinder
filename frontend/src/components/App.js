import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Board from "./testComponents";

const Game = () => (
  <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
  // <React.Fragment>
  //   <DataProvider endpoint="api/lead/" 
  //                 render={data => <Table data={data} />} />
  //   <Form endpoint="api/lead/" />
  // </React.Fragment>
);
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Game />, wrapper) : null;