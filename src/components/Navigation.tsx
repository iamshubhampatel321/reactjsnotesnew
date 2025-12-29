import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Rocket } from 'lucide-react';
import { Theme } from '../App';

interface NavigationProps {
  theme: Theme;
  toggleTheme: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const phases = [
  { path: '/', name: '🏠 Home', phase: 0 },
  { path: '/phase1', name: '🌱 Phase 1: React Intro', phase: 1 },
  { path: '/phase2', name: '🧩 Phase 2: JSX & Components', phase: 2 },
  { path: '/phase3', name: '🔁 Phase 3: Props & State', phase: 3 },
  { path: '/phase4', name: '⚡ Phase 4: Events & Lists', phase: 4 },
  { path: '/phase5', name: '✍️ Phase 5: Forms & Refs', phase: 5 },
  { path: '/phase6', name: '🧠 Phase 6: Hooks', phase: 6 },
  { path: '/phase7', name: '🧭 Phase 7: Routing', phase: 7 },
  { path: '/phase8', name: '🎨 Phase 8: Styling', phase: 8 },
  { path: '/phase9', name: '🌍 Phase 9: API Integration', phase: 9 },
  { path: '/phase10', name: '🧘 Phase 10: State Management', phase: 10 },
  { path: '/phase11', name: '🧼 Phase 11: Performance', phase: 11 },
  { path: '/phase12', name: '🧪 Phase 12: Testing', phase: 12 },
  { path: '/phase13', name: '🌐 Phase 13: Deployment', phase: 13 },
  { path: '/phase14', name: '💪 Phase 14: Projects', phase: 14 },
];

export function Navigation({ theme, toggleTheme, menuOpen, setMenuOpen }: NavigationProps) {
  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 ${
        theme === 'dark' 
          ? 'bg-gray-800/95 border-purple-500/30' 
          : 'bg-white/95 border-purple-300'
      } backdrop-blur-sm border-b shadow-lg`}>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${
                theme === 'dark'
                  ? 'bg-purple-600 hover:bg-purple-500'
                  : 'bg-purple-500 hover:bg-purple-600'
              } text-white`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Rocket className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} size={32} />
            <span className={`${
              theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
              React Learning Adventure
            </span>
          </div>
          
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all hover:scale-110 ${
              theme === 'dark'
                ? 'bg-yellow-400 hover:bg-yellow-300'
                : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {theme === 'dark' ? (
              <Sun size={24} className="text-gray-900" />
            ) : (
              <Moon size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-16 left-0 bottom-0 w-64 z-40 transition-transform duration-300 ${
        menuOpen ? 'translate-x-0' : '-translate-x-full'
      } ${
        theme === 'dark'
          ? 'bg-gray-800/95'
          : 'bg-white/95'
      } backdrop-blur-sm border-r ${
        theme === 'dark' ? 'border-purple-500/30' : 'border-purple-300'
      } overflow-y-auto`}>
        <nav className="p-4 space-y-2">
          {phases.map((phase) => (
            <Link
              key={phase.path}
              to={phase.path}
              onClick={() => setMenuOpen(false)}
              className={`block p-3 rounded-lg transition-all hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-purple-600/20 hover:bg-purple-600/40 text-purple-200'
                  : 'bg-purple-100 hover:bg-purple-200 text-purple-900'
              }`}
            >
              {phase.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 top-16"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
