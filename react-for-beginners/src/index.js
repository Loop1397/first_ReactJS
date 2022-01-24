import React from "react";
import ReactDOM from "react-dom";
import CoinTrackerApp from "./CoinTrackerApp";
import MovieApp from "./MovieApp";
import ToDoApp from "./ToDoApp";

ReactDOM.render(
    <React.StrictMode>
        {/* <ToDoApp />
        <CoinTrackerApp />
        <hr /> */}
        <MovieApp />
    </React.StrictMode>,
    document.getElementById("root")
);
