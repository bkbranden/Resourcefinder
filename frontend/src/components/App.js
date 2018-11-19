// import React from "react";
// import ReactDOM from "react-dom";
// import Board from "./testComponents";
// import Search from './search';


// class Game extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       history: [{
//         squares: Array(9).fill(null),
//       }],
//       xIsNext: true,
//       stepNumber: 0,
//     }
//   }

//   jumpTo(step){
//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) == 0,
//     });
//   }

//   handleClick(i){
//     const history  = this.state.history.slice(0, this.state.stepNumber + 1);
//     const current = history[history.length -1];
//     const squares = current.squares.slice();
//     if(calculateWinner(squares) || squares[i]){
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       history: history.concat([{
//         squares: squares,
//       }]),
//       xIsNext: !this.state.xIsNext,
//       stepNumber: history.length,
//     });
//   }


//   render(){
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     const moves = history.map((step, move) => {
//       const desc = move ? 'Go to move #' + move : 'Go to game start';
//       return (
//         <li key={move}>
//           <button onClick= {() => this.jumpTo(move)}>{desc}</button>
//         </li>
//       )
//     })

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     return(
//       <div className= "game">
//         <div className = "game-board">
//           <Board 
//             squares = {current.squares}
//             onClick = {(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{ status}</div>
//             <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }
// }

// function calculateWinner(squares){
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],];
  
//     for (let i = 0; i <lines.length; i++){
//       const[a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
//         return squares[a];
//       }
//     }
//     return null;
// }


// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.render(<Game />, wrapper) : null;

import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
class Main extends React.Component{
  render(){
    return (<div className = "main-container">
    <ReactiveBase
      app="absurdvacations"
      credentials="cKUMLQWvh:999f4a0e-2f99-4d7e-adc2-d94a9b4f62fc"
      theme={{
        typography: {
           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',fontSize: "16px"
        },
        colors: {
              textColor: "#fff",
              backgroundColor: "#212121",
              primaryTextColor: "#fff",
              primaryColor: "#2196F3",
              titleColor: "#fff",
              alertColor: "#d9534f",
              borderColor: "#666"
        }
      }}>
      Hello from ReactiveSearch!
      </ReactiveBase>
    </div>);
      
    }
    
}

export default Main;


