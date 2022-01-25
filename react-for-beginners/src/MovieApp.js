import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function MovieApp() {
    return (
        <Router>
            <Routes>
                <Route path="/hello" element={<h2>Hello</h2>} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default MovieApp;
