import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { InProgress, Welcome, TopBar, Calculator, Paint } from './modules';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/hello" element={<Welcome />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/inProgress" element={<InProgress />} />
        <Route path="" element={<Navigate to="/hello" />} />
      </Routes>
    </Router>
  );
};

export default App;
