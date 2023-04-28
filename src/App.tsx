import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InProgress, Hello, TopBar } from './modules';

const App = () => {
  useEffect(() => {
    let location = window.location.pathname;
    if (location === '/') window.location.pathname = '/hello';
  }, []);

  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/inProgress" element={<InProgress />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
