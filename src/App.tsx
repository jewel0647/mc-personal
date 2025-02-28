import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import DataProvider from "./store/DataProvider";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Clients" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}
