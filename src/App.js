import "./App.css";
import React, { useEffect, useState } from "react";
import FetchHTML from "./FetchHTML";
import DownloadButton from "./DownloadButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/ksef" element={<FetchHTML />} />
    </Routes>
    </Router>
  );
}

export default App;
