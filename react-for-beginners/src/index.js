import React from "react";
import ReactDOM from "react-dom";
// import CoinTrackerApp from "./CoinTrackerApp";
import MovieApp from "./MovieApp";
// import ToDoApp from "./ToDoApp";

// npm 충돌 확인용
// require("react-dom");
// window.React2 = require("react");
// console.log(window.React1 === window.React2);

ReactDOM.render(
    <React.StrictMode>
        {/* <ToDoApp />
        <CoinTrackerApp />
        <hr /> */}
        <MovieApp />
    </React.StrictMode>,
    document.getElementById("root")
);
