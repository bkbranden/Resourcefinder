import React from "react";
import ReactDOM from "react-dom";
import Board from "./testComponents";
import Search from './search';


class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) == 0,
    });
  }

  handleClick(i){
    const history  = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length -1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }


  render(){
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick= {() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return(
      <div className= "game">
        <div className = "game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status}</div>
            <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],];
  
    for (let i = 0; i <lines.length; i++){
      const[a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
}


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Game />, wrapper) : null;

// import React, { Component } from 'react';
// import {
//   ReactiveBase,
//   DataSearch,
//   MultiDataList,
//   RangeSlider,
//   DateRange,
//   MultiList,
//   SingleRange,
//   SelectedFilters,
//   ResultCard
// } from "@appbaseio/reactivesearch";
// import "./App.css";

// class Main extends React.Component{
//   render(){
//     return (<div className = "main-container">
//     <ReactiveBase
//       app="absurdvacations"
//       credentials="cKUMLQWvh:999f4a0e-2f99-4d7e-adc2-d94a9b4f62fc"
//       theme={{
//         typography: {
//            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',fontSize: "16px"
//         },
//         colors: {
//               textColor: "#fff",
//               backgroundColor: "#212121",
//               primaryTextColor: "#fff",
//               primaryColor: "#2196F3",
//               titleColor: "#fff",
//               alertColor: "#d9534f",
//               borderColor: "#666"
//         }
//       }}>
//       <DataSearch
//           componentId="mainSearch"
//           dataField={["location_name.search"]}
//           categoryField="title"
//           className="search-bar"
//           queryFormat="and"
//           placeholder="Search for movies..."
//           iconPosition="left"
//           autosuggest={false}
//           filterLabel="search"
//       />


//       <MultiList     
//         componentId="genres-list"
//         dataField="location_name.raw"
//         className="genres-filter"
//         size={20}
//         sortBy="asc"
//         queryFormat="or"
//         selectAllLabel="All Genres"
//         showCheckbox={true}
//         showCount={true}
//         showSearch={true}
//         placeholder="Search for a Genre"
//         react={{          
//             and: [
//                 "mainSearch",
//                 "results",
//                 "RangeSlider",
//                 "distance-list" 
//             ]
//         }}          
//         showFilter={true}
//         filterLabel="Genre"
//         URLParams={false} 
//         innerClass={{ 
//             label: "list-item",
//             input: "list-input"
//         }}
//       />
//         <SingleRange 
//             componentId= "distance-list"
//             dataField= "coordinates"
//             className= "revenue-filter"
//             data={[
//               { start: 0, end: 1000, label: "< 1M" },
//               { start: 1000, end: 10000, label: "1M-10M" },
//               { start: 10000, end: 500000, label: "10M-500M" },
//               { start: 500000, end: 1000000, label: "500M-1B" },
//               { start: 1000000, end: 10000000, label: "> 1B" }
//             ]}
//             showRadio={true}
//             showFilter={true}
//             filterLabel="Revenue"
//             URLParams= {false}
//             innerClass= {{
//               label: "revenue-label",
//               radio: "revenue-radio"
//             }}
//         />

//         <RangeSlider
//                 componentId="RangeSlider"
//                 dataField="percent_full"
//                 className="review-filter"
//                 range={{
//                   start: 0,
//                   end: 10
//                 }}
//                 rangeLabels={{
//                   start: "0",
//                   end: "10"
//                 }}
//                 react={{
//                   and: [
//                     "mainSearch",
//                     "results",
//                     "genres-list",
//                     "revenue-list"
//                   ]
//                 }}
//             />
        
//         <ResultCard
//           componentId="results"
//           dataField="location_name"
//           pagination={true}
//           paginationAt="bottom"
//           pages={5}
//           size={12}
//           Loader="Loading..."
//           showResultStats={true}
//           noResults="No results were found..."
//           sortOptions={[
//             {
//               dataField: "revenue",
//               sortBy: "desc",
//               label: "Sort by Revenue(High to Low)"
//             },
//             {
//               dataField: "popularity",
//               sortBy: "desc",
//               label: "Sort by Popularity(High to Low)"
//             },
//             {
//               dataField: "vote_average",
//               sortBy: "desc",
//               label: "Sort by Ratings(High to Low)"
//             },
//             {
//               dataField: "original_title.raw",
//               sortBy: "asc",
//               label: "Sort by Title(A-Z)"
//             }
//           ]}
//           className="Result_card"
//           innerClass={{
//             title: "result-title",
//             listItem: "result-item",
//             list: "list-container",
//             sortOptions: "sort-options",
//             resultStats: "result-stats",
//             resultsInfo: "result-list-info",
//             poweredBy: "powered-by"
//           }}
//           react={{
//             and: [
//               "mainSearch",
//               "RangeSlider",
//               "genres-list",
//               "distance-list"
//             ]
//           }}
//           onData={function(res) {
//             return {
//               description: (
//                 <div className="main-description">
//                   <div className="ih-item square effect6 top_to_bottom">
//                     <a
//                       target="#"
//                     >
//                       <div className="img">
//                         <img
//                           src={
//                             "../../static/frontend/images" + res.fields.location_name +".jpg"
//                           }
//                           alt={res.fields.location_name}
//                           className="result-image"
//                         />
//                       </div>
//                       <div className="info colored">
//                         <h3 className="overlay-title">
//                           {res.fields.location_name}
//                         </h3>

//                         <div className="overlay-description">
//                           {res.fields.description}
//                         </div>

//                         <div className="overlay-info">
//                           <div className="rating-time-score-container">
//                             <div className="sub-title Rating-data">
//                               <b>
//                                 Occupancy
//                                 <span className="details">
//                                   {" "}
//                                   {res.fields.percent_full}/10{" "}
//                                 </span>
//                               </b>
//                             </div>
                            
//                           </div>
                          
//                         </div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               ),
//               url: "https://www.imdb.com/title/tt0848228/"
//             };
//           }}
//         />

          




//       </ReactiveBase>

//     </div>);
      
//     }
    
// }

// export default Main;


