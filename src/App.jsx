import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import StageDetail from './pages/StageDetail';
import Profile from './pages/Profile';

function App() {
  return (
    <ProgressProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stage/:id" element={<StageDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ProgressProvider>
  );
}

export default App;
