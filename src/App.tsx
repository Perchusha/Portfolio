import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { InProgress, Hello, TopBar } from './modules';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/inProgress" element={<InProgress />} />
        <Route path="" element={<Navigate to="/hello" />} />
      </Routes>
    </Router>
  );
};

export default App;
