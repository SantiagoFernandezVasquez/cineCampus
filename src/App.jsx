import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/index.jsx'
import Details from './views/details.jsx'
import Cinema from './views/cinema'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/cinema" element={<Cinema />} />
            </Routes>
        </Router>
    );
}

export default App;