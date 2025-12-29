import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Phase1 } from './components/phases/Phase1';
import { Phase2 } from './components/phases/Phase2';
import { Phase3 } from './components/phases/Phase3';
import { Phase4 } from './components/phases/Phase4';
import { Phase5 } from './components/phases/Phase5';
import { Phase6 } from './components/phases/Phase6';
import { Phase7 } from './components/phases/Phase7';
import { Phase8 } from './components/phases/Phase8';
import { Phase9 } from './components/phases/Phase9';
import { Phase10 } from './components/phases/Phase10';
import { Phase11 } from './components/phases/Phase11';
import { Phase12 } from './components/phases/Phase12';
import { Phase13 } from './components/phases/Phase13';
import { Phase14 } from './components/phases/Phase14';

export type Theme = 'dark' | 'light';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
      }`}>
        <Navigation 
          theme={theme} 
          toggleTheme={toggleTheme}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        
        <main className={`transition-all duration-300 ${menuOpen ? 'ml-64' : 'ml-0'} p-4 md:p-8`}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/phase1" element={<Phase1 theme={theme} />} />
            <Route path="/phase2" element={<Phase2 theme={theme} />} />
            <Route path="/phase3" element={<Phase3 theme={theme} />} />
            <Route path="/phase4" element={<Phase4 theme={theme} />} />
            <Route path="/phase5" element={<Phase5 theme={theme} />} />
            <Route path="/phase6" element={<Phase6 theme={theme} />} />
            <Route path="/phase7" element={<Phase7 theme={theme} />} />
            <Route path="/phase8" element={<Phase8 theme={theme} />} />
            <Route path="/phase9" element={<Phase9 theme={theme} />} />
            <Route path="/phase10" element={<Phase10 theme={theme} />} />
            <Route path="/phase11" element={<Phase11 theme={theme} />} />
            <Route path="/phase12" element={<Phase12 theme={theme} />} />
            <Route path="/phase13" element={<Phase13 theme={theme} />} />
            <Route path="/phase14" element={<Phase14 theme={theme} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
