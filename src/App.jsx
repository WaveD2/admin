import "./App.css";
import React from "react";
import Styled from "styled-components";
import Sidebar from "./components/layout/Slider/Sidebar";
import Dashboard from "./components/layout/Dashboard/Dashboard";
// import { BrowerSever, Router, }
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const Div = Styled.div`
  position: relative;
`;
function App() {
  return (
    <>
      <>
        <Sidebar />
        <Dashboard />
      </>
    </>
  );
}

export default App;
