import React from 'react';
import './App.css'
import { HashRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from '@/pages/home';

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<div>layout<Outlet /></div>}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
