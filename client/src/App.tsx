import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from './redux/selectors';
import { ThemeProvider } from 'styled-components';
import { InProgress, Welcome, TopBar, Calculator, Paint, APIFetcher } from './modules';
import { BottomBar } from './modules/BottomBar';

const App = () => {
  const { theme } = useSelector(selectTheme);

  // TODO: change TopBar position and some content styles
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/hello" element={<Welcome />} />
          <Route path="/apifetcher" element={<APIFetcher />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/paint" element={<Paint />} />
          <Route path="/inProgress" element={<InProgress />} />
          <Route path="" element={<Navigate to="/hello" />} />
        </Routes>
        <BottomBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;