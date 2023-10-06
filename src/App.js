import React from "react";
import Home from "./components/page/Home"; // Sesuaikan path dengan lokasi file Beranda.js Anda
// import './components/Home.css'
import "./App.css";
import "./components/css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
