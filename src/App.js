import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TokenHandler from './components/TokenHandler';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  const handleTokenSet = () => {
    setIsAuthenticated(true);
    setLoading(false);
  };

  const handleTokenNotFound = () => {
    setLoading(false);
  };

  return (
    <Router>
      <TokenHandler onTokenSet={handleTokenSet} onTokenNotFound={handleTokenNotFound} />
      {loading ? (
        <div>Loading...</div> // 로딩 화면을 보여줍니다.
      ) : (
        <Routes>
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
          />
          <Route 
            path="/home" 
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} 
          />
        </Routes>
      )}
    </Router>
  );
};

export default App;
