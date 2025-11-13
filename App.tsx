
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

const AppContent: React.FC = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </main>
            {/* Render footer on all pages based on images */}
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
        <AppContent />
    </HashRouter>
  );
};

export default App;
