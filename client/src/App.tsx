import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/selectors';
import { ThemeProvider } from 'styled-components';
import { Welcome, TopBar, Calculator, Paint, APIFetcher } from './modules';
import { BottomBar } from './modules/BottomBar';

const App = () => {
  const { theme } = useSelector(selectTheme);
  const Router =
    location.hostname === 'localhost' || location.hostname === '127.0.0.1'
      ? BrowserRouter
      : HashRouter;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Routes>
          <Route path="" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/apifetcher" element={<APIFetcher />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/paint" element={<Paint />} />
        </Routes>
        <BottomBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
