import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={'/Home'}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/header" element={<Header/>}/>
    </Routes>
  );
}

export default App;
