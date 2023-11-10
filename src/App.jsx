import React from "react";
import "./assets/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_page from "./components/Home/Main_page";
import Events from "./components/Events/Events";
import Gallery from "./components/Gallery/Gallery";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Yuvaan2024/" element={<Main_page />} />
        <Route path="/Yuvaan2024/events" element={<Events />} />
        <Route path="/Yuvaan2024/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};
export default App;
