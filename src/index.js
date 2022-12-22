import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Style/index.css';

import LandingPage from './Pages/LandingPage';
import App from './Pages/App';
import RegisterPage from './Pages/RegisterPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
        <Route index element={<LandingPage />} />
        <Route path="/Home" element={<App />} />
        <Route path="/Register" element={<RegisterPage  />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
