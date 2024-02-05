import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { selectTheme } from './redux/selectors';
import { Welcome, TopBar, Calculator, Paint, APIFetcher, BottomBar, LifeCycle } from './modules';
import { MainFrameContainer } from './styled';

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
        <MainFrameContainer>
          <Routes>
            <Route path="" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/lifecycle" element={<LifeCycle />} />
            <Route path="/apifetcher" element={<APIFetcher />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/paint" element={<Paint />} />
          </Routes>
        </MainFrameContainer>
        <BottomBar />
      </Router>
    </ThemeProvider>
  );
};

export default App;
