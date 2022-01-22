import React from "react";
import ReactDOM from "react-dom";
import CoinTrackerApp from "./CoinTrackerApp";
import ToDoApp from "./ToDoApp";

ReactDOM.render(
    <React.StrictMode>
        <ToDoApp />
        <CoinTrackerApp />
    </React.StrictMode>,
    document.getElementById("root")
);
