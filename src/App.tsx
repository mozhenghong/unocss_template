import React from 'react';
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from '@/pages/home';
import LayoutComponent from '@/layouts';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<div />} />
          <Route path="/bbb" element={<Home />} />
          <Route path="/ccc" element={<div />} />
          <Route path="/hhh" element={<div />} />
          <Route path="/eee" element={<div />} />
          <Route path="/fff" element={<div />} />
          <Route path="/ggg" element={<div />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

